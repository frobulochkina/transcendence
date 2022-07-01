import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserCode } from './decorators/user-code.decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@UserCode() code: string): string {
    console.log(code);  
	return this.appService.getHello();
  }

  @Post()
  getPage(): string {
	return this.appService.getHello();
  }
}
