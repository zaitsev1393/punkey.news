import {Component, OnInit} from '@angular/core';
import {TopicsService} from './services/topics/topics.service';
import {ShareButtons} from '@ngx-share/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Punkey News | Новости которые хочется обсудить');
  }

}
