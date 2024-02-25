import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { AccessKeyDto } from './dto/accessKey.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signup(@Body() signUpDto: SignUpDto) {
    console.log('Body: ', signUpDto);
    return this.authService.singnUp(signUpDto);
  }

  @Post('/access-key')
  async accessKey(@Body() accessKeyDto: AccessKeyDto) {
    console.log('Body: ', accessKeyDto);
    return this.authService.getAccessKey(accessKeyDto);
  }
}
