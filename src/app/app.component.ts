import { Component } from '@angular/core';
import {TopicsService} from './services/topics/topics.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data;

  constructor(public topicsService: TopicsService,
              private activatedRoute: ActivatedRoute) {
    // this.topicsService.getTopics().subscribe(topics => {
    //   console.log(topics);
    // });

  }
}
