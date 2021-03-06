import { NgModule } from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {ShareButtonModule} from '@ngx-share/button';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
