import { Injectable } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(public meta: Meta,
              public title: Title) {

  }

  updateTags(config) {

  }

}
