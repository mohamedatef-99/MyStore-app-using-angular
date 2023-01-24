import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import { Product } from "src/app/models/product";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name!: string;
  address!: string;

  onSubmit(event:any) {
    this.name = event.value.name;
    this.address = event.value.address;
  }

}
