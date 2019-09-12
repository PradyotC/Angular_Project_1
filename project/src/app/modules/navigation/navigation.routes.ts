import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from 'src/app/shared/services/userAuth.guard';
import { NavComponent } from './components/navigation/navigation.component';

export const route: Route[] = [
    {
        path: "",
        component: NavComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'Home',
                component: HomeComponent,
            },
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'Product',
                loadChildren: '../../modules/product/product.module#ProductModule',
            }
        ]
    },
]