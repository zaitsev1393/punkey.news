import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  public logoLetters = '../../assets/images/logo_letters1.png';

  constructor(public meta: Meta,
              private title: Title) {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle('Punkey News | О нас');

    this.meta.updateTag({property: 'description', content: 'Punkey News - это сатирический новостной сайт.\''});

    this.meta.updateTag({property: 'og:title', content: 'Punkey News | О нас'});
    this.meta.updateTag({property: 'og:description', content: 'Punkey News - это сатирический новостной сайт.'});
  }

  ngOnInit() {
  }

}
