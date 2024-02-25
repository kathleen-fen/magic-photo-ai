import { Body, Controller, Post } from '@nestjs/common';
import { MagicDto } from './dto/magic.dto';
import { MagicService } from './magic.service';

@Controller()
export class MagicController {
  constructor(private magicService: MagicService) {}

  @Post('/magic-image')
  async generateMagicImage(@Body() magicDto: MagicDto) {
    return this.magicService.generateMagicImage(magicDto);
  }
}
