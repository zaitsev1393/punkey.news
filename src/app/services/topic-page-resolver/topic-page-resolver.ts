import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {TopicsService} from '../topics/topics.service';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {of} from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import {isPlatformServer} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TopicPageResolver {

  constructor(
    private topicsService: TopicsService,
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    console.log(route.params);
    const topicId = route.params['topicId'];
    const TOPIC_KEY = makeStateKey<any>('course-' + topicId);

    if (this.transferState.hasKey(TOPIC_KEY)) {
      const topic = this.transferState.get<any>(TOPIC_KEY, null);
      this.transferState.remove(TOPIC_KEY);
      return of(topic);
    } else {
      return this.topicsService.getTopic(topicId)
        .pipe(
          tap(topic => {
            console.log(topic);
            if (isPlatformServer(this.platformId)) {
              this.transferState.set(TOPIC_KEY, topic);
            }

          })
        );
    }
  }
}
