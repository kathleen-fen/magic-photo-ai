import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/db/db.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [DataBaseModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
