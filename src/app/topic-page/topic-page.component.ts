import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta} from '@angular/platform-browser';
import {TopicsService} from '../services/topics/topics.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.sass']
})
export class TopicPageComponent implements OnInit {

  public topic: any;
  constructor(private activatedRoute: ActivatedRoute,
              private meta: Meta,
              private topicsService: TopicsService) {
    // console.log(this.activatedRoute.snapshot.data);
    // this.topic = this.activatedRoute.snapshot.data['topic'];
    this.updateTags();
  }

  updateTags() {
    console.log('updated');
    this.meta.updateTag({property: 'og:title', content: 'test title'});
    this.meta.addTag({property: 'og:image', content: '//ahaha'});
  }

  ngOnInit() {

  }

}
