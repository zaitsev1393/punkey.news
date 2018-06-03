import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {  AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TopicsService} from './services/topics/topics.service';

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
    HttpClientModule
  ],
  providers: [TopicsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
