import { Component, OnInit , Input } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() public starcounter: number;

  public stars= new Array();

  constructor() {
  }

  ngOnInit() {
    while(this.starcounter>0)
    {
      if(this.starcounter<=0.5)
        this.stars.push(false);
      else
        this.stars.push(true);
      this.starcounter--;
    }
  }

}
