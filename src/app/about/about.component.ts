import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  public logoLetters = '../../assets/images/logo_letters1.png';

  constructor(public meta: Meta) {
    this.updateMetaTags();
    // let n = new Notification('Opa');
  }

  updateMetaTags() {
    console.log('ahaha');
    this.meta.updateTag({property: 'og:title', content: 'About Title'});
  }

  ngOnInit() {
  }

}
