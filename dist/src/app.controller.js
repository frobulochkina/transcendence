"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const user_code_decorators_1 = require("./decorators/user-code.decorators");
const axios_1 = require("@nestjs/axios");
let AppController = class AppController {
    constructor(appService, httpService) {
        this.appService = appService;
        this.httpService = httpService;
    }
    getHello(request) {
        console.log(request);
        const code = request['code'];
        console.log(code);
        return this.appService.getHello();
    }
    async login(res) {
        const data = {
            grant_type: "authorization_code",
            client_id: 'a89e0a72c840da0deecebcaab1b2de1452badeea23a1b9b239ad240254e5ada3',
            client_secret: '2fd72786ed99fac41b2c9f24455bb78d0af872aea0e101d65d34e6d443b0fd1d',
            code: 'code',
            redirect_uri: encodeURI('http://localhost:3000/login')
        };
        const axios = require('axios');
        const config = {
            method: 'post',
            url: 'https://api.intra.42.fr/oauth/token',
            headers: {
                'Authorization': 'basic T64Mdy7m['
            }
        };
        const response = await axios(config, data);
        console.log(response);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, user_code_decorators_1.UserCode)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/login'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.Dependencies)(app_service_1.AppService),
    __metadata("design:paramtypes", [app_service_1.AppService,
        axios_1.HttpService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map