import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.interface';
import { MessageDto } from './messages.dto';
@Injectable()
export class MessagesService {
  constructor(@InjectModel('Message') private messageModel: Model<Message>) {}
  async createMessage(messageDto: MessageDto): Promise<Message> {
    const message = new this.messageModel(messageDto);
    return await message.save();
  }
  async getMessages(): Promise<Message[]> {
    return await this.messageModel.find().exec();
  }
  async getMessage(id): Promise<Message> {
    return await this.messageModel.findOne({ _id: id });
  }
}
