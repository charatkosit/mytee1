import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatComponent } from './components/float/float.component';
import { TeeComponent } from './components/tee/tee.component';
import { Tee2Component } from './components/tee2/tee2.component';
import { Tee3Component } from './components/tee3/tee3.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatComponent,
    TeeComponent,
    Tee2Component,
    Tee3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
