import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.sass']
})
export class TopicsComponent implements OnInit {

  public topics;

  constructor(private activatedRoute: ActivatedRoute) {
    this.topics = this.activatedRoute.snapshot.data['topics'];
    console.log(this.topics);
  }

  ngOnInit() {
  }

}
