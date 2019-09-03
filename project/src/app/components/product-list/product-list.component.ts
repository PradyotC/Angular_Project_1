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
  public filterdata:Data[] = new Array();
  public inputKey =new Search();
  public data:string="";

  constructor(private productServices : ProductServices) { }

  onClick()
  {
    this.flag = !this.flag;
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

  save(data)
  {
    this.data = data;
    this.filterdata=this.dataModel.filter( (val)=> this.match(val.product));
  }

  ngOnInit() {
    this.productServices.Product().subscribe(data => {this.dataModel = data ; this.filterdata = this.dataModel });
  }
  
}
