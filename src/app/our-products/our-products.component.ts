import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servises/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../servises/shoppingcart.service';
import { Socket } from 'ngx-socket-io';
import { UserService } from '../servises/user.service';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {
  private ourProducts: Product[] = [];
  private productSub: Subscription;
  private connectSub: Subscription;
  private users: Subscription;
  user: boolean = false;
  admin: boolean = false;
  smartsearch: string = "";
  name: string = "";
  minPrice: number;
  maxPrice: number;
  minQuantity: number;
  maxQuantity: number;

  constructor(private UserService: UserService, private ShoppingCart: ShoppingCart, private producrService: ProductService, private router: Router, public socket: Socket) {
  this.socket.on('new-product', function(product){
      producrService.addProduct(product);
    });
   }

  ngOnInit() {
    this.producrService.getProducts();
    this.productSub = this.producrService.getProductUpdateListener().subscribe((productData: Product[]) => {
      this.ourProducts = productData;
    });
    this.connectSub = this.UserService.getUserRoleListener().subscribe((connect: boolean[]) => {
      this.user = connect[0];
      this.admin = connect[1];
    });
  }

  onMultiSearch() {
    this.producrService.getProducts();
    setTimeout(() => {
      if (this.name != "")
        this.ourProducts = this.ourProducts.filter(res => {
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        });
      if (this.minPrice != null)
        this.ourProducts = this.ourProducts.filter(res => {
          return res.price >= this.minPrice.valueOf();
        });
      if (this.maxPrice != null)
        this.ourProducts = this.ourProducts.filter(res => {
          return res.price < this.maxPrice.valueOf();
        });
      if (this.minQuantity != null)
        this.ourProducts = this.ourProducts.filter(res => {
          return res.quantity >= this.minQuantity.valueOf();
        });
      if (this.maxQuantity != null)
        this.ourProducts = this.ourProducts.filter(res => {
          return res.quantity < this.maxQuantity.valueOf();
        });
    }, 100);
  }

  onDelete(id: string) {
    this.producrService.deleteProduct(id);
  }

  onCreate() {
    this.router.navigate(['/product-create']);
  }

  onAddToCart(productId, name, price, category) {
    this.ShoppingCart.addProduct(productId, name, price, category);
  }

  onSmartSearch() {
    if (this.smartsearch === "") {
      alert("Null Search");
      this.producrService.getProducts();
    }
    else {
      this.producrService.smartSearch( this.smartsearch.split(" "));
    }
  }
}
