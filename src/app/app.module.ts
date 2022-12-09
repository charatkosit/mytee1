import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatComponent } from './components/float/float.component';
import { TeeComponent } from './components/tee/tee.component';
<<<<<<< HEAD
import { Float2Component } from './components/float2/float2.component';
=======
import { Tee2Component } from './components/tee2/tee2.component';
import { Tee3Component } from './components/tee3/tee3.component';
>>>>>>> 6b7173621008d15c26f00b47fb6da1cc538ce6ef

@NgModule({
  declarations: [
    AppComponent,
    FloatComponent,
    TeeComponent,
<<<<<<< HEAD
    Float2Component
=======
    Tee2Component,
    Tee3Component
>>>>>>> 6b7173621008d15c26f00b47fb6da1cc538ce6ef
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
