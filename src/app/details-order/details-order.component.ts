import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css']
})
export class DetailsOrderComponent implements OnInit {
  private detailsProducts: Product[]=[];
  constructor(private _route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
  this.detailsProducts = this._route.snapshot.params['order.cart'];
  }
  onOrders() {
    this.router.navigate(['/app-orders']);
  }

}
