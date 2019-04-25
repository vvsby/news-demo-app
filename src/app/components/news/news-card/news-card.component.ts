import { Component, OnInit, Input } from '@angular/core';

import * as Classes from '../../../classes/classes';


@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() article: Classes.Articles;
  showMore = false;

  constructor() { }

  ngOnInit() {
  }
  openLink(url) {
    window.open(url);
  }

}
