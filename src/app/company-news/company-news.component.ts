import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.scss']
})
export class CompanyNewsComponent implements OnInit {
  cards: Card[] = [
    new Card('Simple beans', 'some text completely irrelevant to beans just to cover space in this card', './assets/images/beans.jpg'),
    // tslint:disable-next-line:max-line-length
    new Card('White beans', 'some text completely irrelevant to beans just to cover space in this card but with white beans', './assets/images/beans-white.jpg'),
    // tslint:disable-next-line:max-line-length
    new Card('Black beans', 'some text completely irrelevant to beans just to cover space in this card but with black beans', './assets/images/beans-black.jpg')
  ];

  title: 'Simple beans';

  constructor() { }

  ngOnInit() {
  }

}
