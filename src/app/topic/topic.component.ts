import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.sass']
})
export class TopicComponent implements OnInit {

  @Input() topic;

  public photo: string = 'https://picsum.photos/600/400/?random';

  public categories: string[] = ['Говно', 'Жопа Новикова', 'Гниды', 'Вагины', 'Елда'];

  constructor() {
  }

  get category() {
    let i: number = Math.floor(Math.random() * 5);
    console.log(i);
    return this.categories[i];
  }

  ngOnInit() {
  }

}
