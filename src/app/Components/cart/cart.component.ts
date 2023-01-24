import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public items: any = []
  public name: string = ''
  public address: string = ''
  public creditCard: string = ''
  public feedback: string = ''
  total: any = 0

  @Output()  addData = new EventEmitter<{name: string, address: string}>();

  cartForm: any;
  constructor(private cartService: CartServiceService){}

  ngOnInit(): void {
    this.cartService.getItems().subscribe(data => {
      this.items = data
    })
    this.cartService.quantityChange.subscribe(data => {
      this.getCartTotal()
    })


    this.getCartTotal()

    this.cartForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(1)]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)]),
      creditCard: new FormControl('', [Validators.required, Validators.minLength(16)]),
      feedback: new FormControl('')
    })

  }

  removeItem(item: any) {
    this.cartService.removeItem(item)
    alert("The Item is deleted")
    this.getCartTotal()
    this.cartService.quantityChange.emit(item)
  }

  submitForm() {
    const data = {
      name: this.cartForm.value.name,
      address: this.cartForm.value.address,
    }
    this.addData.emit(data)
    console.log(data)
  }

  getCartTotal() {
    this.total = 0
    for (let x in this.items) {
      this.total += this.items[x].price * this.items[x].quantity
    }
  }

  onNameChange(newValue: string) {
    if (this.cartForm.controls.name.touched && this.cartForm.controls.name.invalid) {
      alert('Name is invalid');
    } else {
      console.log('Name is valid');
    }
  }

}
