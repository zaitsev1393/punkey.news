import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.sass']
})
export class TopicsComponent implements OnInit {

  public topics = 0;
  public lengthAcc;
  public lengths: number[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.topics = this.activatedRoute.snapshot.data['topics'];
    this.lengthAcc = 0;
    this.lengths = [];
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
      this.lengthAcc = 0;
      this.lengths = [];
    }
    return length;
  }

  ngOnInit() {
  }

}
