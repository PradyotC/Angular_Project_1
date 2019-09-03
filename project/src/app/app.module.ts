import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from './components/home/home.component';
import {NavComponent} from './components/navigation/navigation.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductServices } from './Shared/Services/product.services';
import { StarComponent } from './components/star/star.component';
import { ProductComponent } from './components/product/product.component';
import { ContentPipe } from './Pipes/http.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProductListComponent,
    StarComponent,
    ProductComponent,
    ContentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
