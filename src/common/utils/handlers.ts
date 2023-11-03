import { Response } from "express";
import { InternalServerError } from "../constants/errors";
import { ResponseWrapper } from "./parsers";

export const errorHandler = function (err, req, res, next) {
    console.log('Uncaught exception occurred');
    console.log("Message: " + err.message);
    let error = err;
    if(!err.type) {
        error = new InternalServerError(err);
    }
    console.error(error);
    let status = err.status || 500
    ResponseHandler.error(res, error, status);
}

function successWrapper(res: Response, data: any, status: number = 200) {
    return res.status(status).json(ResponseWrapper.success(data));
}

function errorWrapper(res: Response, err: any, status: number = 500) {
    return res.status(status).json(ResponseWrapper.error(err));
}

export const ResponseHandler = {
    success: successWrapper,
    error: errorWrapper
}