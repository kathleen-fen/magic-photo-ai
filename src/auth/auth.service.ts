import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { AccessKeyDto } from './dto/accessKey.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async singnUp(signUpDto: SignUpDto) {
    const randomUUID = crypto.randomUUID();
    const randomSalt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(signUpDto.password, randomSalt);

    return this.prisma.user.create({
      data: { ...signUpDto, api_key: randomUUID, password },
      select: {
        email: true,
        api_key: true,
        createddAt: true,
        updatedAt: true,
      },
    });
  }

  async getAccessKey(accessKeyDto: AccessKeyDto): Promise<{ api_key: string }> {
    const foundUser = await this.prisma.user.findFirst({
      where: { email: accessKeyDto.email },
    });
    console.log('found user: ', foundUser.email);

    const isHasAccess = await bcrypt.compare(
      accessKeyDto.password,
      foundUser.password,
    );
    console.log('isHasAccess: ', isHasAccess);
    if (isHasAccess)
      return {
        api_key: foundUser.api_key,
      };
    else throw new UnauthorizedException('You do not have access!');
  }
}
