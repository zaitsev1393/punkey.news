import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.sass']
})
export class TopicsComponent implements OnInit {

  public topics: any = [];
  public lengthAcc;
  public lengths: number[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.topics = this.activatedRoute.snapshot.data['topics'];
    this.lengthAcc = 0;
    this.lengths = [];
  }

  ngOnInit() {
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

  get loading() {
    let loading = this.topics.length === 0;
    return loading;
  }

}
