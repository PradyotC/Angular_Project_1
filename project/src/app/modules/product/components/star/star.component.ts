import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() public starcounter: number;

  public stars= new Array();
  
  @Output() public starcounteroutputdata = new EventEmitter();

  constructor() {
  }

  Action()
  {
    this.starcounteroutputdata.emit(this.starcounter);
  }

  ngOnInit() {
    let i:number=this.starcounter;
    while(i>0)
    {
      if(i<=0.5)
        this.stars.push(false);
      else
        this.stars.push(true);
      i--;
    }
  }

}
