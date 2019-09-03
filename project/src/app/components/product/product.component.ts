import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Data } from "./../../Shared/Model/data";
import { ProductServices } from "../../Shared/Services/product.services";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  public productId: number;
  public dataModel:Data[] = new Array();

  constructor(
    private productServices : ProductServices,
    private AR: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.productServices.Product().subscribe(data => this.dataModel = data);
    console.log(this.dataModel);
    this.AR.params.subscribe(data => {
      this.productId = data["id"];
    });
  }
}
