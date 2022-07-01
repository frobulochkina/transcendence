"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCode = void 0;
const common_1 = require("@nestjs/common");
exports.UserCode = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.query;
});
//# sourceMappingURL=user-code.decorators.js.map