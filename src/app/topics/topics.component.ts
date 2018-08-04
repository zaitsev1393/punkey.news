import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.sass']
})
export class TopicsComponent implements OnInit {

  public topics;

  public lengthAcc = 0;
  public lengths = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.topics = this.activatedRoute.snapshot.data['topics'];
    console.log(this.topics);
  }

  get grid() {
    let length;
    if (this.lengthAcc < 2) {
      length = Math.round(Math.random() * (5 - 3) + 3);
      this.lengths.push(length);
      this.lengthAcc++;
    } else {
      length = 12 - this.lengths.reduce((a, b) => a + b, 0);
      this.lengths = [];
      this.lengthAcc = 0;
    }
    return length;
  }

  ngOnInit() {
  }

}
