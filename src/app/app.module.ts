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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [TopicsService, HttpClient, TopicsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
