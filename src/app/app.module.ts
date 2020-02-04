import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppBoostrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppBoostrapModule ],
  declarations: [ AppComponent, ServerComponent, ServersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
