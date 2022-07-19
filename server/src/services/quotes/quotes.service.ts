import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class QuotesService {
    constructor(private http: HttpService){}

  getQuotes() {
    return this.http
      .get('http://quotesondesign.com/wp-json/posts')
      .pipe(map((response) => response.data));
  }
  getQuote(id) {
    return this.http
      .get('http://quotesondesign.com/wp-json/posts' + id)
      .pipe(map((response) => response.data));
  }
  getRandomQuote() {
    return this.http
      .get('http://quotesondesign.com/wp-json/posts')
      .pipe(map((response) => response.data));
  }
}
