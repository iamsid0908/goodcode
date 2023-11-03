import { forEach, get } from "lodash";
import { CommonApiReqParamKeys, CommonDeviceContext, HeaderFields, Headers } from "../constants/service_types";
import { Request } from "express";
import { ResponseWrapper } from "./parsers";
import { ResponseHandler } from "./handlers";

const COMMON_REQ_KEYS = [
    CommonApiReqParamKeys.UserId,
    CommonApiReqParamKeys.DeviceContext,
  ]

const getCustomKeyFromHeaders = function (key: CommonApiReqParamKeys, headers: Headers) {
    switch (key) {
        case CommonApiReqParamKeys.UserId:
            return get(headers, HeaderFields.AuthId, null)
        case CommonApiReqParamKeys.DeviceContext: {
            const deviceContext: CommonDeviceContext = {
                deviceOs: headers[HeaderFields.DeviceOs],
                deviceId: headers[HeaderFields.DeviceId],
                appVersion: headers[HeaderFields.VersionName]
            }
            return deviceContext;
        }
        default:
            return null;
    }
}

const getReqParamsFromHeaders = function (keys: CommonApiReqParamKeys[], headers: Headers) {
    const reqParams = {};
    forEach(keys, (key) => {
        reqParams[key] = getCustomKeyFromHeaders(key, headers);
    });
    return reqParams;
}

const apiWrapper = function (api) {
    return async function (req, res, next) {
    try {
        // run controllers logic
        const reqParams = getReqParamsFromHeaders(COMMON_REQ_KEYS, req.headers)
        const apiParams = Object.assign({}, req.body, {
            ...reqParams
        });
        const response = await api(apiParams)
        ResponseHandler.success(res, response)
    } catch (e) {
        // if an exception is raised, do not send any response
        // just continue performing the middleware chain
        next(e)
    }
    };
}

const wrapApiCollection = (apiCollection) => {
    const newCollection = {}
    forEach(apiCollection, (fn, key) => {
        newCollection[key] = apiWrapper(fn);
    });
    return newCollection;
};

export const ServiceWrappers = {
    apiWrapper,
    wrapApiCollection
}

