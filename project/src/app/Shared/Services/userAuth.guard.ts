import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';


@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate {
    constructor(private route:Router){}
    canActivate():any
    {
        let token = localStorage.getItem('currentUser');
        if(!token)
        {
            alert('Please login First');
            this.route.navigateByUrl('/Login');
            return false;
        }
        else
        {
            return true;
        }
    }
}