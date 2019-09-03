import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './../Model/data';

export class ProductServices {
    public productEndpoint:string = '../../../assets/productAPI.json';
    constructor(private http: HttpClient){}

    Product():Observable<Data[]>
    {
        return this.http.get<Data[]>(this.productEndpoint);
    }

}