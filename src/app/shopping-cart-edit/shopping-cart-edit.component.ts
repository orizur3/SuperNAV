import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCart } from '../servises/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.css']
})
export class ShoppingCartEditComponent implements OnInit {
  private shoppingProductId: string;
  private shoppingProductName: string;
  private shoppingProductPrice: number;
  private shoppingProductQuantity: number;
  private shoppingProductCategory: string;
  private token: string;

  constructor(private ShoppingCart: ShoppingCart,private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.shoppingProductId = this._route.snapshot.params['shopping._id'];
    this.shoppingProductName = this._route.snapshot.params['shopping.name'];
    this.shoppingProductPrice = this._route.snapshot.params['shopping.price'];
    this.shoppingProductQuantity = this._route.snapshot.params['shopping.quantity'];
    this.shoppingProductCategory = this._route.snapshot.params['shopping.category'];
  }

  onSave(quantity) {
    if (quantity.value > 0)
      this.ShoppingCart.editProduct(this.shoppingProductId, this.shoppingProductName, this.shoppingProductPrice, quantity.value, this.shoppingProductCategory);
    else
      this.ShoppingCart.deleteProduct(this.shoppingProductId);
    this.router.navigate(['/shopping-cart']);
  }

}
