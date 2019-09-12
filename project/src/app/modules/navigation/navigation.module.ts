import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { route } from './navigation.routes';
import { ContentPipe } from './components/Pipes/http.pipe';


@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    ContentPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class NavigationModule { }
