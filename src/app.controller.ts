import { Controller, Get, Post } from '@nestjs/common';
import { response } from 'express';
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

  @Post()
  getPage(): string {
	return this.appService.getHello();
  }
}
