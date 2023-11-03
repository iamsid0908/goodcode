const ErrorType = {
    INTERNAL_SERVER_ERROR: {
      type: 'internal_server_error',
      status: 500
    },
  
    ENTITY_NOT_FOUND: {
      message: 'Entity not found',
      type: 'entity_not_found',
      status: 404
    },
  
    UNAUTHORIZED: {
      message: 'Authorization failure',
      type: 'authorization_failure',
      status: 401
    },
  
    MISSING_PARAM: {
      message: 'Parameter not found',
      type: 'missing_param',
      status: 400
    },
  
    INVALID_PARAM: {
      message: 'Invalid parameter value',
      type: 'invalid_parameter_value',
      status: 400
    },
  };
  
  export default ErrorType;