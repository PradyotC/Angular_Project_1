import { Component, OnInit } from '@angular/core';
import { Data } from './../../Shared/Model/data';
import { ProductServices } from '../../Shared/Services/product.services';
import { Search } from '../../Shared/Model/search.template';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public flag:boolean = false;
  public dataModel:Data[] = new Array();
  public inp =new Search();
  public data:string="";

  constructor(private productServices : ProductServices) { }

  onClick()
  {
    this.flag = !this.flag;
  }

  ngOnInit() {
    this.productServices.Product().subscribe(data => this.dataModel = data);
    console.log(this.dataModel);
  }

  save(data)
  {
    this.data = data;
  }

  match(y:string):boolean
  {
    if(this.data=="")
    {
      return true;
    }
    else
    {
      if(y.toLowerCase().includes(this.data.toLowerCase()))
      {
        return true;
      }
      else{
        return false;
      }
    }
  }

}
