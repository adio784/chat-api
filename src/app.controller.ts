import { Body, Controller, Post, Req } from '@nestjs/common';
import { PusherService } from './pusher.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller("api")
export class AppController {
  
  constructor(private pusherService: PusherService) {}

  @Post('messages')
  async messages(@Req() req: Request, @Body() sendMessageDto: SendMessageDto, @Body() body: any) {
    return await this.pusherService.trigger("chat", "message", sendMessageDto);
  }
}
