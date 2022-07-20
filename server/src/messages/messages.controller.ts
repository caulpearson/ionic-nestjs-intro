import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from 'src/messages/messages.service';
import { MessageDto } from './messages.dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  getMessages() {
    return this.messagesService.getQuotes();
  }

  @Get(':id')
  getMessage(@Param('id') id) {
    return this.messagesService.getQuote(id);
  }

  @Post()
  createMessage(@Body() message: MessageDto) {
    console.log(message);
    return message;
  }
}
