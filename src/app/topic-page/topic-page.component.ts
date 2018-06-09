import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.sass']
})
export class TopicPageComponent implements OnInit {

  public topic: any;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.topic = this.activatedRoute.snapshot.data['topic'];
  }

  ngOnInit() {
  }

}
