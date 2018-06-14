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

  public pageIdentifier;
  public pageUrl;

  public id: number;
  public topic: any;
  constructor(private activatedRoute: ActivatedRoute,
              private meta: Meta,
              private topicsService: TopicsService,
              private transferState: TransferState) {
    // console.log(this.activatedRoute.snapshot.data);
    // this.topic = this.activatedRoute.snapshot.data['topic'];
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['topicId'];
    this.topic = await this.topicsService.getTopic(this.id).toPromise();
    this.pageIdentifier = this.topic.id;
    this.pageUrl = 'http://violet-monkey.herokuapp.com/topics/' + this.topic.id;
    this.updateTags();
  }

  updateTags() {
    console.log(this.topic);
    this.meta.updateTag({property: 'og:title', content: this.topic.title});
    this.meta.updateTag({property: 'og:description', content: this.topic.text});
    this.meta.updateTag({property: 'og:image', content: this.topic.cover.url});
  }

}
