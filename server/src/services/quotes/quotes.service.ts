import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class QuotesService {
  constructor(private http: HttpService) {}

  getQuotes() {
    return this.http
      .get('https://quotesondesign.com/wp-json/wp/v2/posts/')
      .pipe(map((response) => response.data));
  }
  getQuote(id) {
    return this.http
      .get('https://quotesondesign.com/wp-json/wp/v2/posts/' + id)
      .pipe(map((response) => response.data));
  }
  getRandomQuote() {
    return this.http
      .get(
        'https://quotesondesign.com/wp-json/wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1',
      )
      .pipe(map((response) => response.data));
  }
}
