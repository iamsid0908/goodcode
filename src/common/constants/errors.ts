import ErrorType from "./error_types";
import { BRError } from "../utils/errors";

export class InternalServerError extends BRError {
    constructor(error) {
        const _error = Object.assign(error, ErrorType.INTERNAL_SERVER_ERROR)
        console.log(_error.message);
        super(_error);
    }
}

export class EntityNotFoundError extends BRError {
    constructor(entity: string) {
        const _error = Object.assign({}, ErrorType.ENTITY_NOT_FOUND);
        _error.message += `: ${entity}`;
        super(_error);
    }
}

export class MissingParamError extends BRError {
    constructor(parameter: string) {
        const _error = Object.assign({}, ErrorType.MISSING_PARAM);
        _error.message += `: ${parameter}`;
        super(_error);
    }
}

export class InvalidParamError extends BRError {
    constructor(parameter: string) {
        const _error = Object.assign({}, ErrorType.INVALID_PARAM);
        _error.message += `: ${parameter}`;
        super(_error);
    }
}