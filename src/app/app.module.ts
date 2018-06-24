import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import {  AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TopicsService} from './services/topics/topics.service';
import {TopicsResolver} from './services/topics-resolver/topics-resolver';
import { TopicsComponent } from './topics/topics.component';
import { TopicComponent } from './topic/topic.component';
import { TopicPageComponent } from './topic-page/topic-page.component';
import {TopicPageResolver} from './services/topic-page-resolver/topic-page-resolver';
import {DisqusModule} from 'angular2-disqus';
import {ShareModule} from '@ngx-share/core';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,

    SidebarComponent,
    TopicsComponent,
    TopicComponent,
    TopicPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserTransferStateModule,
    DisqusModule,
    ShareModule.forRoot()
  ],
  providers: [TopicsService, HttpClient, TopicsResolver, TopicPageResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
