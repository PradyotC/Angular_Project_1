import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StarComponent } from './components/star/star.component';

import { ContentPipe } from './Pipes/http.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProductServices } from './Shared/Services/product.services';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { route } from './product.routes';

@NgModule({
  declarations: [
    ProductListComponent,
    StarComponent,
    ProductComponent,
    ContentPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(route),
  ],
  providers: [
    ProductServices,
  ]
})
export class ProductModule { }
