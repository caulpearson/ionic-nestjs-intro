import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuotesService } from 'src/services/quotes/quotes.service';
import { MessagesDto } from './messages.dto';

@Controller('messages')
export class MessagesController {
  constructor(private quotesService: QuotesService) {}

  @Get()
  getMessages() {
    return this.quotesService.getQuotes();
  }

  @Get(':id')
  getMessage(@Param('id') id) {
    return this.quotesService.getQuote(id);
  }

  @Post()
  createMessage(@Body() message: MessagesDto) {
    console.log(message);
    return message;
  }
}
