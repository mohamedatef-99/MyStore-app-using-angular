import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {



  constructor(private http:HttpClient) { }
  getProd() : Observable<[]>{
    return this.http.get<[]>("https://fakestoreapi.com/products");//("src/assets/data.json");
  }

  getSingleProd(id:any){
    return this.http.get("https://fakestoreapi.com/products/"+id)
  }


}
