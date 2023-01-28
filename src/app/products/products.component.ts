import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {name: 'product 1'},
    {name: 'product 2'},
    {name: 'product 3'}
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  loadProducts() {
    this.router.navigate(['/products'], {relativeTo: this.route});
  }
}
