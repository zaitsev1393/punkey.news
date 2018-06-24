import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
              private transferState: TransferState,
              private router: Router) {
    // console.log(this.activatedRoute.snapshot.data);
    // this.topic = this.activatedRoute.snapshot.data['topic'];
  }

  async ngOnInit() {
    await this.getTopic();
    this.setDisqus();
    this.updateTags();
  }

  async getTopic() {
    this.id = this.activatedRoute.snapshot.params['topicId'];
    this.topic = await this.topicsService.getTopic(this.id).toPromise();
  }

  setDisqus() {
    this.pageIdentifier = this.topic.id;
    this.pageUrl = 'http://violet-monkey.herokuapp.com/topics/' + this.topic.id;
  }

  updateTags() {
    console.log(this.topic);
    this.meta.updateTag({property: 'og:title', content: this.topic.title});
    this.meta.updateTag({property: 'og:description', content: this.topic.text});
    this.meta.updateTag({property: 'og:image', content: this.topic.cover.url});
  }

  navigate(topic) {
    this.router.navigateByUrl('topics/' + topic.id);
  }

}
