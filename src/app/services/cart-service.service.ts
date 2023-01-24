import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItems: any = [];
  private products = new BehaviorSubject<any>([]);
  private totalPrice = 0;
  quantityChange = new EventEmitter<any>();
  constructor() { }
  getItems() {
    return this.products.asObservable()
  }

  addToCart(product: any)  {
    this.cartItems.push(product)
    this.products.next(this.cartItems)
    console.log(this.cartItems)
  }

  singleProduct(product: any)  {
    this.cartItems.push(product)
    this.products.next(this.cartItems)
    console.log(this.cartItems)
  }


  removeItem(product: any) {
    this.cartItems.map((a: any,index:any) => {
      if (product.id === a.id) {
        this.cartItems.splice(index,1)
      }
    })
  }
}
