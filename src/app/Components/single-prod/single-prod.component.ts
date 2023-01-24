import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-single-prod',
  templateUrl: './single-prod.component.html',
  styleUrls: ['./single-prod.component.css']
})
export class SingleProdComponent implements OnInit {
  id: any
  data:any = {}
  constructor(private productService: ProdServiceService, private active: ActivatedRoute) { 
    this.id = this.active.snapshot.paramMap.get('id')
    console.log(this.id)
  }


  
  ngOnInit(): void {
    this.getSingleProd()
  }

  getSingleProd() {
    this.productService.getSingleProd(this.id).subscribe(res => {
      this.data = res
    })
  }
}
