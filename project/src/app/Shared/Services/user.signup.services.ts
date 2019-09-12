import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../models/userDetails';

@Injectable({providedIn: 'root'})

export class UserSignUpServices
{
    public header: HttpHeaders;
    private loginEndpoint:string = "http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync";
    constructor(private http:HttpClient){
        this.header = new HttpHeaders({'Content-Type':'application/json'})
    }
    UserSignUp(item:UserDetails)
    {
        return this.http.post(this.loginEndpoint, JSON.stringify(item), {headers: this.header});
    }
}