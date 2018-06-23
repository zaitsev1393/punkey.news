import { Component } from '@angular/core';
import {TopicsService} from './services/topics/topics.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public isRoot: boolean;

  constructor(public location: Location,
              public router: Router) {
    this.router.events.subscribe(event => {
      this.isRoot = this.location.path() === '';
    });
  }
}
