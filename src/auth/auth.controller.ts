import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConfigFactory, ConfigService } from '@nestjs/config';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	// constructor(private readonly configService: ConfigService) {}
	// this.configService.get('TEST');

	// @UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {

	}
}
