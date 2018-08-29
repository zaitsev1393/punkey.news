import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  public logoLetters = '../../assets/images/logo_letters1.png';

  constructor(public meta: Meta,
              private title: Title) {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle('Punkey News | Контакты');

    this.meta.updateTag({property: 'description', content: 'Как с нами связаться'});

    this.meta.updateTag({property: 'og:title', content: 'Punkey News | Контакты'});
    this.meta.updateTag({property: 'og:description', content: 'Как с нами связаться'});
  }

  ngOnInit() {
  }

}
