import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    const id = param ? +param : null;
    this.selectedProduct = products.find(i=>i.id === id);
  }

}
