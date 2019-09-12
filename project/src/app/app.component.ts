import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(private router: Router){
  }

  ngOnInit() 
  {
    if(JSON.stringify(localStorage.getItem('currentUser')))
    {
      this.router.navigateByUrl('user');
    }
  }
}
