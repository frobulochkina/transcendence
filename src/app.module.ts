import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';

@Module({
  // imports: [
	// 	  ConfigModule.forRoot(),
	// 	  TypegooseModule.forRootAsync({
	// 	  imports: [ConfigModule],
	// 	  inject: [ConfigService],
	// 	  // useFactory: getMogoConfig
	// }),
	//   AuthModule, 
	//   TopPageModule
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
