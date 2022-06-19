import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModel } from './user.model';


@Module({
  controllers: [AuthController]
  // imports: [
  //   TypegooseModele.forFeature([
  //     {
  //       type
  //     }
  //   ])
  // ]

})
export class AuthModule {}
