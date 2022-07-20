import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { QuotesService } from './services/quotes/quotes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    HttpModule,
    MessagesModule,
    MongooseModule.forRoot(
      'mongodb+srv://caulfield:zeppelin@cluster0.if8jm.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
