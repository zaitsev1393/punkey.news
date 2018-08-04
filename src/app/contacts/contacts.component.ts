import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  constructor(public meta: Meta) {
    this.updateMetaTags();
  }

  updateMetaTags() {
    console.log('ahaha con');
    this.meta.updateTag({property: 'og:title', content: 'Contacts Title'});
  }

  ngOnInit() {
  }

}
