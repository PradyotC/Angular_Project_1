import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ILogin } from "src/app/Shared/Model/userLogin";

@Component({
  selector: "app-navigation",
  templateUrl: `./navigation.component.html`,
  styles: [``]
})
export class NavComponent {
  public username: string;
  public data: any;
  constructor(private route: Router) {
    let username: ILogin = JSON.parse(localStorage.getItem("currentUser"));
    if (username) {
      this.username = `Hello ${username.FirstName} ${username.LastName}`;
      // console.log(username);
    }
  }

  ngOnInit() {}

  logout() {
    localStorage.removeItem("currentUser");
    this.route.navigateByUrl("Login");
  }
}
