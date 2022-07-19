import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { QuotesService } from './services/quotes/quotes.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MessagesController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
