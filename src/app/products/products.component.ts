import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products =products;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  loadProducts() {
    this.router.navigate(['/products'], {relativeTo: this.route});
  }
}
