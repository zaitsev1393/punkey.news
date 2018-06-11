import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta, TransferState} from '@angular/platform-browser';
import {TopicsService} from '../services/topics/topics.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.sass']
})
export class TopicPageComponent implements OnInit {

  public id: number;
  public topic: any;
  constructor(private activatedRoute: ActivatedRoute,
              private meta: Meta,
              private topicsService: TopicsService,
              private transferState: TransferState) {
    // console.log(this.activatedRoute.snapshot.data);
    // this.topic = this.activatedRoute.snapshot.data['topic'];
    console.log(this.activatedRoute.parent);

    console.log('topicid: ' + this.id);
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['topicId'];
    this.topic = await this.topicsService.getTopic(this.id).toPromise();
    this.updateTags();
  }

  updateTags() {
    console.log('updated');
    console.log(this.topic);
    this.meta.updateTag({property: 'og:title', content: this.topic.title});
    this.meta.updateTag({property: 'og:text', content: this.topic.description});
    this.meta.updateTag({property: 'og:image', content: this.topic.cover.url});
  }

}
