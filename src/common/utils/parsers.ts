import { Response } from "express";
import { BRError } from "./errors";

const errorResponse = function (err: BRError) {
    return {
        success: false,
        error: {
            type: err.type,
            message: err.message,
            status: err.status,
            code: err.code
        }
    }
}

const successResponse = function (response) {
    return {
        success: true,
        data: {
            ...response
        }
    };
}

export const ResponseWrapper = {
    success: successResponse,
    error: errorResponse
}