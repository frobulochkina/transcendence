import { Controller, Get, Post, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { UserCode } from './decorators/user-code.decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@UserCode() request: string): string {
    console.log(request);  
    const code = request['code'];
  console.log(code);
	return this.appService.getHello();
  }

  @Get('/login')
  async login(@Res() res: Response) {
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

  @Post()
  getPage(): string {
	return this.appService.getHello();
  }
}
