import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from './components/home/home.component';
import {NavComponent} from './components/navigation/navigation.component';
import { ContentPipe } from './Pipes/http.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
