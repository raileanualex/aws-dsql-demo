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

// node_modules/uuid/dist/rng.js
var require_rng = __commonJS({
  "node_modules/uuid/dist/rng.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = rng;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function rng() {
      return _crypto.default.randomBytes(16);
    }
  }
});

// node_modules/uuid/dist/bytesToUuid.js
var require_bytesToUuid = __commonJS({
  "node_modules/uuid/dist/bytesToUuid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var byteToHex = [];
    for (i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 256).toString(16).substr(1);
    }
    var i;
    function bytesToUuid(buf, offset) {
      var i2 = offset || 0;
      var bth = byteToHex;
      return [bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]]].join("");
    }
    var _default = bytesToUuid;
    exports2.default = _default;
  }
});

// node_modules/uuid/dist/v1.js
var require_v1 = __commonJS({
  "node_modules/uuid/dist/v1.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _bytesToUuid = _interopRequireDefault(require_bytesToUuid());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v12(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || [];
      options = options || {};
      var node = options.node || _nodeId;
      var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      var msecs = options.msecs !== void 0 ? options.msecs : (/* @__PURE__ */ new Date()).getTime();
      var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      var tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (var n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf ? buf : (0, _bytesToUuid.default)(b);
    }
    var _default = v12;
    exports2.default = _default;
  }
});

// node_modules/uuid/dist/v35.js
var require_v35 = __commonJS({
  "node_modules/uuid/dist/v35.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = _default;
    exports2.URL = exports2.DNS = void 0;
    var _bytesToUuid = _interopRequireDefault(require_bytesToUuid());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function uuidToBytes(uuid2) {
      var bytes = [];
      uuid2.replace(/[a-fA-F0-9]{2}/g, function(hex) {
        bytes.push(parseInt(hex, 16));
      });
      return bytes;
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      var bytes = new Array(str.length);
      for (var i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports2.DNS = DNS;
    var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports2.URL = URL;
    function _default(name, version, hashfunc) {
      var generateUUID = function(value, namespace, buf, offset) {
        var off = buf && offset || 0;
        if (typeof value == "string") value = stringToBytes(value);
        if (typeof namespace == "string") namespace = uuidToBytes(namespace);
        if (!Array.isArray(value)) throw TypeError("value must be an array of bytes");
        if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
        var bytes = hashfunc(namespace.concat(value));
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          for (var idx = 0; idx < 16; ++idx) {
            buf[off + idx] = bytes[idx];
          }
        }
        return buf || (0, _bytesToUuid.default)(bytes);
      };
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }
  }
});

// node_modules/uuid/dist/md5.js
var require_md5 = __commonJS({
  "node_modules/uuid/dist/md5.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function md5(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === "string") {
        bytes = Buffer.from(bytes, "utf8");
      }
      return _crypto.default.createHash("md5").update(bytes).digest();
    }
    var _default = md5;
    exports2.default = _default;
  }
});

// node_modules/uuid/dist/v3.js
var require_v3 = __commonJS({
  "node_modules/uuid/dist/v3.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v32 = (0, _v.default)("v3", 48, _md.default);
    var _default = v32;
    exports2.default = _default;
  }
});

// node_modules/uuid/dist/v4.js
var require_v4 = __commonJS({
  "node_modules/uuid/dist/v4.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _bytesToUuid = _interopRequireDefault(require_bytesToUuid());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function v42(options, buf, offset) {
      var i = buf && offset || 0;
      if (typeof options == "string") {
        buf = options === "binary" ? new Array(16) : null;
        options = null;
      }
      options = options || {};
      var rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }
      return buf || (0, _bytesToUuid.default)(rnds);
    }
    var _default = v42;
    exports2.default = _default;
  }
});

// node_modules/uuid/dist/sha1.js
var require_sha1 = __commonJS({
  "node_modules/uuid/dist/sha1.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function sha1(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === "string") {
        bytes = Buffer.from(bytes, "utf8");
      }
      return _crypto.default.createHash("sha1").update(bytes).digest();
    }
    var _default = sha1;
    exports2.default = _default;
  }
});

// node_modules/uuid/dist/v5.js
var require_v5 = __commonJS({
  "node_modules/uuid/dist/v5.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v52 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v52;
    exports2.default = _default;
  }
});

// node_modules/uuid/dist/index.js
var require_dist = __commonJS({
  "node_modules/uuid/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "v1", {
      enumerable: true,
      get: function() {
        return _v.default;
      }
    });
    Object.defineProperty(exports2, "v3", {
      enumerable: true,
      get: function() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports2, "v4", {
      enumerable: true,
      get: function() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports2, "v5", {
      enumerable: true,
      get: function() {
        return _v4.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// service/generate-game/Handler.ts
var Handler_exports = {};
__export(Handler_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(Handler_exports);

// service/generate-game/Adapter.ts
var import_lambda_handlers = __toESM(require_lambda_handlers());
var GenerateGameAdapter = class {
  constructor(usecase) {
    this.usecase = usecase;
    this.usecase = usecase;
  }
  async handleEvent(event, context) {
    const result = await this.usecase.run(event, context);
    console.log("LOG=", JSON.stringify(result));
    return (0, import_lambda_handlers.ok)(JSON.stringify(result));
  }
};

// node_modules/uuid/wrapper.mjs
var import_dist = __toESM(require_dist(), 1);
var v1 = import_dist.default.v1;
var v3 = import_dist.default.v3;
var v4 = import_dist.default.v4;
var v5 = import_dist.default.v5;

// service/generate-game/Usecase.ts
var import_lib_dynamodb = require("@aws-sdk/lib-dynamodb");
var import_client_dynamodb = require("@aws-sdk/client-dynamodb");
var dynamoDb = new import_client_dynamodb.DynamoDBClient({});
var GenerateGame = class {
  constructor(deepseekRepository) {
    this.deepseekRepository = deepseekRepository;
  }
  async run(payload, context) {
    console.log(context);
    const difficulty = payload.body ? JSON.parse(payload.body).difficulty : "easy";
    const gameData = this.deepseekRepository.generateWord(difficulty);
    const gameId = v4();
    const item = {
      id: gameId,
      difficulty,
      letters: gameData.letters,
      startTime: (/* @__PURE__ */ new Date()).toISOString()
    };
    const command = new import_lib_dynamodb.PutCommand({
      TableName: "GamesTable",
      Item: item
    });
    console.log("before dynamoDb.send");
    await dynamoDb.send(command);
    console.log("after dynamoDb.send");
    return {
      id: gameId,
      letters: gameData.letters,
      startTime: item.startTime,
      difficulty
    };
  }
};

// service/generate-game/DeepseekRepository.ts
var DeepseekRepository = class {
  constructor() {
  }
  generateWord(difficulty) {
    return {
      letters: `unique-text-${v4()}-${difficulty}`.split(""),
      difficulty
    };
  }
};

// service/generate-game/Handler.ts
async function initialize() {
  const deepeseekRepository = new DeepseekRepository();
  const usecase = new GenerateGame(deepeseekRepository);
  return new GenerateGameAdapter(usecase);
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
