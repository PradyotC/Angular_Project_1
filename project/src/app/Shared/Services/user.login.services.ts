import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ILogin } from "../models/userLogin";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class UserLoginServices {
  public header: HttpHeaders;
  private loginEndpoint: string =
    "http://mobile.test.acorsociety.com/ideators/api/users/userloginasync";
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }
  UserLogin(item: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(this.loginEndpoint, JSON.stringify(item), {headers: this.header})
      .pipe(
        map(item => {
          if (item && item.UserIdentity) {
            localStorage.setItem("currentUser", JSON.stringify(item));
            return item;
          }
          return item;
        })
      );
  }
}
