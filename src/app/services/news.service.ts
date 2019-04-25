import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Classes from '../classes/classes';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsFeed = new BehaviorSubject<Classes.ResponseFromNewsApi>(null);

  constructor(
    public http: HttpClient
  ) {
    this.getNews();
  }
  getNews() {
    this.http.get('assets/apiKeyForNewsApi', { responseType: 'text' }).pipe(
      switchMap(key => {
        const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=gb&' +
          'sortBy=popularity&' +
          'pageSize=30&' +
          'page=1&' +
          'apiKey=' + key;
        return this.http.get(url);
      }))
      .subscribe((res: Classes.ResponseFromNewsApi) => {
        console.log(res);
        this.newsFeed.next(new Classes.ResponseFromNewsApi(res));
      });
  }
}
