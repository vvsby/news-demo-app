import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import * as Classes from '../../classes/classes';

import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  subscribes: Subscription[];
  news: Classes.ResponseFromNewsApi;

  constructor(
    public http: HttpClient,
    public newsService: NewsService
  ) {
    this.subscribes = [];
  }

  ngOnInit() {
    this.subscribes.push(
      this.newsService.newsFeed.subscribe(res => {
        this.news = new Classes.ResponseFromNewsApi(res);
      }));

  }
  ngOnDestroy() {
    this.subscribes.forEach(
      subscr => subscr.unsubscribe()
    );
  }
  trackByForArticles(index, item) {
    return index;
  }
}
