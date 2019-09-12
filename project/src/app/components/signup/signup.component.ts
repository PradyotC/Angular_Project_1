import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserSignUpServices } from "src/app/shared/services/user.signup.services";
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/Shared/Model/userDetails';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public signup: FormGroup;
  public submitted: boolean = false;

  

  constructor(
    private fb: FormBuilder,
    private userSignUp: UserSignUpServices,
    public router: Router
  ) {}

  ngOnInit() {
    this.signup = this.fb.group({
      Firstname: ["", [Validators.required]],
      Lastname: ["", [Validators.required]],
      MobileNo: ["", [Validators.required]],
      EmailId: ["", [Validators.required]],
      Address: ["", [Validators.required]],
      UserLogin: this.fb.group({
        username: ["", [Validators.required]],
        password: ["", [Validators.required]]
      })
    });
  }

  Save(data: UserDetails) {
    this.submitted = true;
    if (!this.signup.valid) {
      return;
    }
    this.userSignUp.UserSignUp(data).subscribe(data => {
      // console.log(data);
      this.router.navigateByUrl('Login');
    });
  }
}
