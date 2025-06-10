var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@enter-at/lambda-handlers/Config.js
var require_Config = __commonJS({
  "node_modules/@enter-at/lambda-handlers/Config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Config = void 0;
    var Config = class {
      logger = console;
    };
    exports2.Config = Config;
  }
});

// node_modules/@enter-at/lambda-handlers/decorator/format/index.js
var require_format = __commonJS({
  "node_modules/@enter-at/lambda-handlers/decorator/format/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.format = void 0;
    var FormatDecorator = class {
      contentType;
      formatter;
      constructor(contentType, formatter) {
        this.contentType = contentType;
        this.formatter = formatter;
      }
      apply(content) {
        return this.formatter(content);
      }
    };
    function format(contentType) {
      function wrapper(_target, _propertyName, propertyDescriptor) {
        propertyDescriptor.value = new FormatDecorator(contentType, propertyDescriptor.value);
        return propertyDescriptor;
      }
      return wrapper;
    }
    exports2.format = format;
  }
});

// node_modules/@enter-at/lambda-handlers/error/LambdaHandlerError.js
var require_LambdaHandlerError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/LambdaHandlerError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LambdaHandlerError = void 0;
    var LambdaHandlerError = class extends Error {
      details;
      constructor(details) {
        super(details ? String(details) : void 0);
        this.details = details;
      }
    };
    exports2.LambdaHandlerError = LambdaHandlerError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/BadRequestError.js
var require_BadRequestError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/BadRequestError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BadRequestError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var BadRequestError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "BadRequestError";
    };
    exports2.BadRequestError = BadRequestError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/ForbiddenError.js
var require_ForbiddenError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/ForbiddenError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ForbiddenError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var ForbiddenError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "ForbiddenError";
    };
    exports2.ForbiddenError = ForbiddenError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/FormatError.js
var require_FormatError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/FormatError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FormatError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var FormatError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "FormatError";
    };
    exports2.FormatError = FormatError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/InternalServerError.js
var require_InternalServerError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/InternalServerError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InternalServerError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var InternalServerError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "InternalServerError";
    };
    exports2.InternalServerError = InternalServerError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/NotFoundError.js
var require_NotFoundError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/NotFoundError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NotFoundError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var NotFoundError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "NotFoundError";
    };
    exports2.NotFoundError = NotFoundError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/RequestTimeoutError.js
var require_RequestTimeoutError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/RequestTimeoutError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RequestTimeoutError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var RequestTimeoutError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "RequestTimeoutError";
    };
    exports2.RequestTimeoutError = RequestTimeoutError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/UnauthorizedError.js
var require_UnauthorizedError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/UnauthorizedError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UnauthorizedError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var UnauthorizedError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "UnauthorizedError";
    };
    exports2.UnauthorizedError = UnauthorizedError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/ValidationError.js
var require_ValidationError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/ValidationError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ValidationError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var ValidationError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "ValidationError";
    };
    exports2.ValidationError = ValidationError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/UnprocessableEntityError.js
var require_UnprocessableEntityError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/UnprocessableEntityError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UnprocessableEntityError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var UnprocessableEntityError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "UnprocessableEntityError";
    };
    exports2.UnprocessableEntityError = UnprocessableEntityError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/ConflictError.js
var require_ConflictError = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/ConflictError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConflictError = void 0;
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    var ConflictError = class extends LambdaHandlerError_1.LambdaHandlerError {
      name = "ConflictError";
    };
    exports2.ConflictError = ConflictError;
  }
});

// node_modules/@enter-at/lambda-handlers/error/index.js
var require_error = __commonJS({
  "node_modules/@enter-at/lambda-handlers/error/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConflictError = exports2.UnprocessableEntityError = exports2.ValidationError = exports2.UnauthorizedError = exports2.RequestTimeoutError = exports2.NotFoundError = exports2.LambdaHandlerError = exports2.InternalServerError = exports2.FormatError = exports2.ForbiddenError = exports2.BadRequestError = void 0;
    var BadRequestError_1 = require_BadRequestError();
    Object.defineProperty(exports2, "BadRequestError", { enumerable: true, get: function() {
      return BadRequestError_1.BadRequestError;
    } });
    var ForbiddenError_1 = require_ForbiddenError();
    Object.defineProperty(exports2, "ForbiddenError", { enumerable: true, get: function() {
      return ForbiddenError_1.ForbiddenError;
    } });
    var FormatError_1 = require_FormatError();
    Object.defineProperty(exports2, "FormatError", { enumerable: true, get: function() {
      return FormatError_1.FormatError;
    } });
    var InternalServerError_1 = require_InternalServerError();
    Object.defineProperty(exports2, "InternalServerError", { enumerable: true, get: function() {
      return InternalServerError_1.InternalServerError;
    } });
    var LambdaHandlerError_1 = require_LambdaHandlerError();
    Object.defineProperty(exports2, "LambdaHandlerError", { enumerable: true, get: function() {
      return LambdaHandlerError_1.LambdaHandlerError;
    } });
    var NotFoundError_1 = require_NotFoundError();
    Object.defineProperty(exports2, "NotFoundError", { enumerable: true, get: function() {
      return NotFoundError_1.NotFoundError;
    } });
    var RequestTimeoutError_1 = require_RequestTimeoutError();
    Object.defineProperty(exports2, "RequestTimeoutError", { enumerable: true, get: function() {
      return RequestTimeoutError_1.RequestTimeoutError;
    } });
    var UnauthorizedError_1 = require_UnauthorizedError();
    Object.defineProperty(exports2, "UnauthorizedError", { enumerable: true, get: function() {
      return UnauthorizedError_1.UnauthorizedError;
    } });
    var ValidationError_1 = require_ValidationError();
    Object.defineProperty(exports2, "ValidationError", { enumerable: true, get: function() {
      return ValidationError_1.ValidationError;
    } });
    var UnprocessableEntityError_1 = require_UnprocessableEntityError();
    Object.defineProperty(exports2, "UnprocessableEntityError", { enumerable: true, get: function() {
      return UnprocessableEntityError_1.UnprocessableEntityError;
    } });
    var ConflictError_1 = require_ConflictError();
    Object.defineProperty(exports2, "ConflictError", { enumerable: true, get: function() {
      return ConflictError_1.ConflictError;
    } });
  }
});

// node_modules/@enter-at/lambda-handlers/format/InputFormat.js
var require_InputFormat = __commonJS({
  "node_modules/@enter-at/lambda-handlers/format/InputFormat.js"(exports2) {
    "use strict";
    var __decorate = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports2 && exports2.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.json = exports2.InputFormat = void 0;
    var format_1 = require_format();
    var error_1 = require_error();
    var InputFormat = class {
      static json(content) {
        try {
          return JSON.parse(content);
        } catch (err) {
          throw new error_1.FormatError("Invalid JSON input.");
        }
      }
    };
    __decorate([
      (0, format_1.format)("application/json"),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", [String]),
      __metadata("design:returntype", Object)
    ], InputFormat, "json", null);
    exports2.InputFormat = InputFormat;
    exports2.json = InputFormat.json;
  }
});

// node_modules/@enter-at/lambda-handlers/format/OutputFormat.js
var require_OutputFormat = __commonJS({
  "node_modules/@enter-at/lambda-handlers/format/OutputFormat.js"(exports2) {
    "use strict";
    var __decorate = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports2 && exports2.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.json = exports2.OutputFormat = void 0;
    var format_1 = require_format();
    var OutputFormat = class {
      static json(content) {
        return JSON.stringify(content);
      }
    };
    __decorate([
      (0, format_1.format)("application/json"),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", [Object]),
      __metadata("design:returntype", String)
    ], OutputFormat, "json", null);
    exports2.OutputFormat = OutputFormat;
    exports2.json = OutputFormat.json;
  }
});

// node_modules/@enter-at/lambda-handlers/handler/BaseHandler.js
var require_BaseHandler = __commonJS({
  "node_modules/@enter-at/lambda-handlers/handler/BaseHandler.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseHandler = void 0;
    var inputFormat = __importStar(require_InputFormat());
    var outputFormat = __importStar(require_OutputFormat());
    var index_1 = require_lambda_handlers();
    var BaseHandler = class {
      inputFormat;
      outputFormat;
      constructor(args) {
        this.inputFormat = args?.inputFormat ?? inputFormat.json;
        this.outputFormat = args?.outputFormat ?? outputFormat.json;
        if (args?.logger) {
          index_1.config.logger = args.logger;
        }
      }
      decorator(_target, _propertyName, propertyDescriptor) {
        propertyDescriptor.value = this.wrapper(propertyDescriptor.value);
        return propertyDescriptor;
      }
      wrapper(method) {
        const handler2 = this;
        return async function fn(event, context) {
          try {
            const instance = this;
            return handler2.after(await method.apply(instance, handler2.before(event, context)));
          } catch (err) {
            return handler2.onException(err);
          }
        };
      }
      before(event, context) {
        return [this.formatInput(event), context];
      }
      after(output) {
        return this.formatOutput(output);
      }
      onException(exception) {
        throw exception;
      }
      formatInput(input) {
        return this.inputFormat.apply(input);
      }
      formatOutput(output) {
        return this.outputFormat.apply(output);
      }
    };
    exports2.BaseHandler = BaseHandler;
  }
});

// node_modules/@enter-at/lambda-handlers/header/CORSHeader.js
var require_CORSHeader = __commonJS({
  "node_modules/@enter-at/lambda-handlers/header/CORSHeader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CORSHeader = void 0;
    var CORSHeader = class {
      origin;
      credentials;
      constructor(origin = "*", credentials = false) {
        this.origin = origin;
        this.credentials = credentials;
      }
      create() {
        return {
          "Access-Control-Allow-Origin": this.origin,
          ...this.credentials && { "Access-Control-Allow-Credentials": true }
        };
      }
    };
    exports2.CORSHeader = CORSHeader;
  }
});

// node_modules/@enter-at/lambda-handlers/header/ContentTypeHeader.js
var require_ContentTypeHeader = __commonJS({
  "node_modules/@enter-at/lambda-handlers/header/ContentTypeHeader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ContentTypeHeader = void 0;
    var ContentTypeHeader = class {
      contentType;
      constructor(contentType) {
        this.contentType = contentType;
      }
      create() {
        return {
          "Content-Type": this.contentType
        };
      }
    };
    exports2.ContentTypeHeader = ContentTypeHeader;
  }
});

// node_modules/@enter-at/lambda-handlers/header/Header.js
var require_Header = __commonJS({
  "node_modules/@enter-at/lambda-handlers/header/Header.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@enter-at/lambda-handlers/header/index.js
var require_header = __commonJS({
  "node_modules/@enter-at/lambda-handlers/header/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_CORSHeader(), exports2);
    __exportStar(require_ContentTypeHeader(), exports2);
    __exportStar(require_Header(), exports2);
  }
});

// node_modules/@enter-at/lambda-handlers/response.js
var require_response = __commonJS({
  "node_modules/@enter-at/lambda-handlers/response.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.noContent = exports2.created = exports2.ok = exports2.conflict = exports2.unprocessableEntity = exports2.requestTimeout = exports2.notFound = exports2.internalServerError = exports2.unauthorized = exports2.forbidden = exports2.badRequest = void 0;
    var http2_1 = require("http2");
    var error_1 = require_error();
    var ConflictError_1 = require_ConflictError();
    function badRequest(details) {
      const error = new error_1.BadRequestError(details);
      return buildResult(error, http2_1.constants.HTTP_STATUS_BAD_REQUEST);
    }
    exports2.badRequest = badRequest;
    function forbidden(details) {
      const error = new error_1.ForbiddenError(details);
      return buildResult(error, http2_1.constants.HTTP_STATUS_FORBIDDEN);
    }
    exports2.forbidden = forbidden;
    function unauthorized(details) {
      const error = new error_1.UnauthorizedError(details);
      return buildResult(error, http2_1.constants.HTTP_STATUS_UNAUTHORIZED);
    }
    exports2.unauthorized = unauthorized;
    function internalServerError() {
      const error = new error_1.InternalServerError("InternalServerError");
      return buildResult(error, http2_1.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
    }
    exports2.internalServerError = internalServerError;
    function notFound(details) {
      const error = new error_1.NotFoundError(details);
      return buildResult(error, http2_1.constants.HTTP_STATUS_NOT_FOUND);
    }
    exports2.notFound = notFound;
    function requestTimeout(details) {
      const error = new error_1.RequestTimeoutError(details);
      return buildResult(error, http2_1.constants.HTTP_STATUS_REQUEST_TIMEOUT);
    }
    exports2.requestTimeout = requestTimeout;
    function unprocessableEntity(details) {
      const error = new error_1.UnprocessableEntityError(details);
      return buildResult(error, http2_1.constants.HTTP_STATUS_UNPROCESSABLE_ENTITY);
    }
    exports2.unprocessableEntity = unprocessableEntity;
    function conflict(details) {
      const error = new ConflictError_1.ConflictError(details);
      return buildResult(error, http2_1.constants.HTTP_STATUS_CONFLICT);
    }
    exports2.conflict = conflict;
    function ok2(result) {
      return buildResult(result, http2_1.constants.HTTP_STATUS_OK);
    }
    exports2.ok = ok2;
    function created(result) {
      return buildResult(result, http2_1.constants.HTTP_STATUS_CREATED);
    }
    exports2.created = created;
    function noContent() {
      return buildResult(null, http2_1.constants.HTTP_STATUS_NO_CONTENT);
    }
    exports2.noContent = noContent;
    function buildResult(result, statusCode) {
      const body = result && result instanceof error_1.LambdaHandlerError ? { errors: [{ name: result.name, details: result.details }] } : result;
      return {
        body,
        statusCode
      };
    }
  }
});

// node_modules/@enter-at/lambda-handlers/handler/APIGatewayProxyHandler.js
var require_APIGatewayProxyHandler = __commonJS({
  "node_modules/@enter-at/lambda-handlers/handler/APIGatewayProxyHandler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.APIGatewayProxyHandler = void 0;
    var error_1 = require_error();
    var header_1 = require_header();
    var response_1 = require_response();
    var BaseHandler_1 = require_BaseHandler();
    var index_1 = require_lambda_handlers();
    var APIGatewayProxyHandler = class _APIGatewayProxyHandler extends BaseHandler_1.BaseHandler {
      static handleError(err) {
        if (err instanceof error_1.ForbiddenError) {
          return (0, response_1.forbidden)(err.details);
        }
        if (err instanceof error_1.UnauthorizedError) {
          return (0, response_1.unauthorized)(err.details);
        }
        if (err instanceof error_1.BadRequestError || err instanceof error_1.FormatError || err instanceof error_1.ValidationError) {
          return (0, response_1.badRequest)(err.details);
        }
        if (err instanceof error_1.RequestTimeoutError) {
          return (0, response_1.requestTimeout)(err.details);
        }
        if (err instanceof error_1.UnprocessableEntityError) {
          return (0, response_1.unprocessableEntity)(err.details);
        }
        if (err instanceof error_1.NotFoundError) {
          return (0, response_1.notFound)(err.details);
        }
        if (err instanceof error_1.ConflictError) {
          return (0, response_1.conflict)(err.details);
        }
        index_1.config.logger.error({
          name: err.name,
          message: err.message,
          stack: err.stack
        });
        return (0, response_1.internalServerError)();
      }
      corsHeader;
      constructor(args) {
        super(args);
        this.corsHeader = args?.cors ?? new header_1.CORSHeader("*", true);
      }
      after(result) {
        result = result ?? (0, response_1.noContent)();
        if (result.statusCode === void 0) {
          result = (0, response_1.ok)(result);
        }
        return this.createResponse(result);
      }
      onException(exception) {
        return this.createResponse(_APIGatewayProxyHandler.handleError(exception));
      }
      formatInput(event) {
        if (!event.body) {
          return event;
        }
        try {
          event.body = this.inputFormat.apply(event.body);
          return event;
        } catch (err) {
          throw err;
        }
      }
      formatOutput(result) {
        const { body, ...properties } = result;
        return {
          body: body ? this.outputFormat.apply(body) : "",
          ...properties
        };
      }
      createResponse(result) {
        result.headers = this.createHeaders(result.headers);
        return this.formatOutput(result);
      }
      createHeaders(headers) {
        return {
          ...headers,
          ...this.corsHeader && this.corsHeader.create(),
          ...this.outputFormat && new header_1.ContentTypeHeader(this.outputFormat.contentType).create()
        };
      }
    };
    exports2.APIGatewayProxyHandler = APIGatewayProxyHandler;
  }
});

// node_modules/@enter-at/lambda-handlers/handler/index.js
var require_handler = __commonJS({
  "node_modules/@enter-at/lambda-handlers/handler/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_BaseHandler(), exports2);
    __exportStar(require_APIGatewayProxyHandler(), exports2);
  }
});

// node_modules/@enter-at/lambda-handlers/decorator/handler/index.js
var require_handler2 = __commonJS({
  "node_modules/@enter-at/lambda-handlers/decorator/handler/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.APIGatewayProxyHandler = void 0;
    var handlers = __importStar(require_handler());
    function APIGatewayProxyHandler(args) {
      const handler2 = new handlers.APIGatewayProxyHandler(args);
      return handler2.decorator.bind(handler2);
    }
    exports2.APIGatewayProxyHandler = APIGatewayProxyHandler;
  }
});

// node_modules/@enter-at/lambda-handlers/decorator/header/index.js
var require_header2 = __commonJS({
  "node_modules/@enter-at/lambda-handlers/decorator/header/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cors = void 0;
    var header_1 = require_header();
    var cors = (origin, credential) => new header_1.CORSHeader(origin, credential);
    exports2.cors = cors;
  }
});

// node_modules/@enter-at/lambda-handlers/index.js
var require_lambda_handlers = __commonJS({
  "node_modules/@enter-at/lambda-handlers/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.format = exports2.config = void 0;
    var Config_1 = require_Config();
    __exportStar(require_format(), exports2);
    __exportStar(require_handler2(), exports2);
    __exportStar(require_header2(), exports2);
    __exportStar(require_error(), exports2);
    var input = __importStar(require_InputFormat());
    var output = __importStar(require_OutputFormat());
    exports2.config = new Config_1.Config();
    exports2.format = {
      input,
      output
    };
    __exportStar(require_header(), exports2);
    __exportStar(require_response(), exports2);
  }
});

// service/validate-word/Handler.ts
var Handler_exports = {};
__export(Handler_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(Handler_exports);

// service/validate-word/Repository.ts
var ValidateWordRepository = class {
  sayHelloWorld() {
    return "Validate word";
  }
};

// service/validate-word/Adapter.ts
var import_lambda_handlers = __toESM(require_lambda_handlers());
var ValidateWordAdapter = class {
  constructor(usecase) {
    this.usecase = usecase;
    this.usecase = usecase;
  }
  async handleEvent(event, context) {
    return (0, import_lambda_handlers.ok)(await this.usecase.run(event, context));
  }
};

// service/validate-word/Usecase.ts
var import_lib_dynamodb = require("@aws-sdk/lib-dynamodb");
var import_client_dynamodb = require("@aws-sdk/client-dynamodb");
var dynamoDbClient = new import_client_dynamodb.DynamoDBClient({});
var ValidateWord = class {
  constructor(validateWordRepository) {
    this.validateWordRepository = validateWordRepository;
  }
  async run(payload, context) {
    try {
      console.log(context);
      console.log(this.validateWordRepository);
      const { gameId, word } = JSON.parse(payload.body || "{}");
      console.log(word);
      const gameParams = {
        TableName: "GamesTable",
        // Replace with your DynamoDB table name
        Key: { id: gameId }
      };
      const gameData = await dynamoDbClient.send(new import_lib_dynamodb.GetCommand(gameParams));
      if (!gameData.Item) {
        return {
          statusCode: 404,
          body: JSON.stringify({ message: "Game not found" })
        };
      }
      const currentTime = (/* @__PURE__ */ new Date()).toISOString();
      if (currentTime > gameData.Item?.expiryTime) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: "Time trial expired" })
        };
      }
      const ivValidWord = true;
      if (!ivValidWord) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: "Invalid word" })
        };
      }
      const scoreParams = {
        TableName: "UsersTable",
        Key: { id: gameId },
        UpdateExpression: "SET score = if_not_exists(score, :initial) + :increment",
        ExpressionAttributeValues: {
          ":increment": 10,
          ":initial": 0
          // Initializes score if it doesn't exist
        },
        ReturnValues: "UPDATED_NEW"
      };
      const updatedScore = await dynamoDbClient.send(new import_lib_dynamodb.UpdateCommand(scoreParams));
      return JSON.stringify(
        {
          message: "VALID_WORD",
          newScore: updatedScore.Attributes ? updatedScore.Attributes.score : null
        }
      );
    } catch (error) {
      console.error("Error validating word:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal Server Error" })
      };
    }
  }
};

// service/validate-word/Handler.ts
async function initialize() {
  const validateWordRepository = new ValidateWordRepository();
  const usecase = new ValidateWord(
    validateWordRepository
  );
  return new ValidateWordAdapter(usecase);
}
var adapter;
async function handler(event, context) {
  if (!adapter) {
    adapter = await initialize();
  }
  return adapter.handleEvent(event, context);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
