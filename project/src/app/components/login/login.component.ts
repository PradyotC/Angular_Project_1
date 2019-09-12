import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserLoginServices } from "src/app/shared/services/user.login.services";
import { Router } from "@angular/router";
import { ILogin } from 'src/app/Shared/Model/userLogin';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public submitted: boolean = false;
  public errors:string;

  constructor(
    private fb: FormBuilder,
    private userServices: UserLoginServices,
    private router: Router
  ) { 
  
  }

  ngOnInit() {
      this.login = this.fb.group({
      UserLogin: this.fb.group({
        UserName: ["", [Validators.required]],
        Password: ["", [Validators.required]]
      })
    });
  }

  Save(data: ILogin) {
    this.submitted = true;
    if (!this.login.valid) {
      return;
    }
    // console.log(data);
    this.userServices.UserLogin(data).subscribe(data => {
      if (data.UserIdentity) {
        // console.log(data);
        this.router.navigateByUrl('user');
      }
      else
      {
        this.errors = data.Error;
      }
    });
  }
}
