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
    let title = '';
    this.id = this.activatedRoute.snapshot.params['topicId'];
    let data = await this.topicsService.getTopic(this.id).toPromise();
    title = data['title'];
    this.meta.updateTag({property: 'og:title', content: `Topic-${title}`});
  }

  updateTags() {
    console.log('updated');
    this.meta.updateTag({property: 'og:title', content: `Topic-${this.id} title`});
    this.meta.addTag({property: 'og:image', content: this.topic.cover.url});
  }

}
