import { Controller, Get, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return {
      message: 'In the real world, all of the messages would be returned',
    };
  }

  @Get(':id')
  getMessage(@Param('id') id) {
    return {
      message: `In the real world, the message would be returned with id of ${id}`,
    };
  }
}
