import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { TopicsService } from '../topics/topics.service';
import {first, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import {isPlatformServer} from '@angular/common';
import {makeStateKey, TransferState} from '@angular/platform-browser';


@Injectable()
export class TopicsResolver implements Resolve<any> {

  constructor(
    private topicsService: TopicsService,
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const COURSE_KEY = makeStateKey('topics');

    if (this.transferState.hasKey(COURSE_KEY)) {

      const topics = this.transferState.get(COURSE_KEY, null);

      this.transferState.remove(COURSE_KEY);

      return of(topics);
    } else {
      return this.topicsService.getTopics()
        .pipe(
          first(),
          tap(topics => {

            if (isPlatformServer(this.platformId)) {
              this.transferState.set(COURSE_KEY, topics);
            }

          })
        );

    }


  }

}
