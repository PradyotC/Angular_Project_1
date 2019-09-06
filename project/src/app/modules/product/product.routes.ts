import { Route } from '@angular/router';

import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product/product.component'

export const route:Route[] = 
[
    {
        path: '',
        component: ProductListComponent,
    },
    {
        path: 'ProductList',
        component: ProductListComponent,
    },
    {
        path: ':id',
        component: ProductComponent,
    }
]