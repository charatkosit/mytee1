import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatComponent } from './components/float/float.component';
import { TeeComponent } from './components/tee/tee.component';
import { Float2Component } from './components/float2/float2.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatComponent,
    TeeComponent,
    Float2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
