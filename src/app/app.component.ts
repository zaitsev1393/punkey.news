import { Component } from '@angular/core';
import {TopicsService} from './services/topics/topics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public topicsService: TopicsService) {
<<<<<<< HEAD
<<<<<<< HEAD
    this.topicsService.getTopics().subscribe(topics => {
      console.log(topics);
    })
=======

>>>>>>> 837a08e... env config added
=======
    this.topicsService.getTopics().subscribe(topics => {
      console.log(topics);
    })
>>>>>>> 15ba3c7... topics service set up
  }
}
