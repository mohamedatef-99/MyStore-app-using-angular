import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import { CartServiceService } from 'src/app/services/cart-service.service'
import { Product } from "src/app/models/product";
import { AppModule } from 'src/app/app.module'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

  products: any[] = [];
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: number=1;
  constructor(private prodserviceService: ProdServiceService, private cartService: CartServiceService){}

  ngOnInit(): void {
    this.prodserviceService.getProd().subscribe(data => {
      this.products = data;
      console.log(this.products);

      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.total * a.quantity })
      })
    }, error =>{
      alert("error");
    })

  }


  addToCart(item: any){
    let existingItem = this.cartService.cartItems.find((i:any) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = item.quantity;
    } else {
      this.cartService.addToCart(item)
    }
    this.cartService.quantityChange.emit(item)
    alert("Added to Your Cart")
}


}
