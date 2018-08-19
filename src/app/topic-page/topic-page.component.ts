import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title, TransferState} from '@angular/platform-browser';
import {TopicsService} from '../services/topics/topics.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.sass']
})
export class TopicPageComponent implements OnInit, OnDestroy {

  public pageIdentifier;
  public pageUrl;
  public editedText: string;

  public id: number;
  public topic: any;
  constructor(private activatedRoute: ActivatedRoute,
              private meta: Meta,
              private title: Title,
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
    this.editedText = this.topic.text.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,' ');
  }

  setDisqus() {
    this.pageIdentifier = this.topic.id;
    this.pageUrl = 'http://violet-monkey.herokuapp.com/topics/' + this.topic.id;
  }

  updateTags() {
    this.title.setTitle('Punkey News | ' + this.topic.title);
    this.meta.updateTag({property: 'keywords', content: this.topic.keywords ? this.topic.keywords : 'comedy news'});
    this.meta.updateTag({property: 'description', content: this.topic.lead});

    this.meta.updateTag({property: 'og:title', content: this.topic.title});
    this.meta.updateTag({property: 'og:description', content: this.topic.lead});
    this.meta.updateTag({property: 'og:image', content: this.topic.cover.url});
  }

  ngOnDestroy() {
    this.title.setTitle('Punkey News | Новости которые хочется обсудить');
  }

  navigate(topic) {
    this.router.navigateByUrl('topics/' + topic.id);
  }

}
