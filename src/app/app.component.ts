import { Component } from '@angular/core';
import {TopicsService} from './services/topics/topics.service';
import {ShareButtons} from '@ngx-share/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor() {
    Notification.requestPermission(function(permission) {
      console.log('Результат запроса прав:', permission);
    });
    var notification = new Notification('Opa nihuya')
  }
}
