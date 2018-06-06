import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {TopicsResolver} from './services/topics-resolver/topics-resolver';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full', resolve: {topics: TopicsResolver} },
  { path: 'about', component: AboutComponent},
  { path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
