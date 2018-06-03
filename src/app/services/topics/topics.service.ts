import { Injectable } from '@angular/core';

import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

const apiUrl = environment.apiBase;

@Injectable()
export class TopicsService {

  constructor( private http: HttpClient ) { }

  getTopics() {
    return this.http.get(apiUrl  + '/api/v1/topics');
  }

  getTopic(topicId) {
    return this.http.get(apiUrl + '/api/v1/topics/' + topicId);
  }

  createTopic(data) {
    return this.http.post(apiUrl + '/api/v1/topics', data, httpOptions);
  }

}
