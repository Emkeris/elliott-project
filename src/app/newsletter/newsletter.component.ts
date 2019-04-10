import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  yourName = '';
  toggle = false;

  constructor() { }

  ngOnInit() {
  }

  toggleText(event: any) {
    this.yourName = event.target.value;
  }

  toggleButton() {
    this.toggle = !this.toggle;
  }
}
