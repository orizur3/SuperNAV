import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servises/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../servises/shoppingcart.service';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {
  private ourProducts: Product[] = [];
  private productSub: Subscription;
  user: boolean = false;
  smartsearch: string = "";
  arraySmart: Product[] = [];
  name: string;
  token: string;
  price: number;
  quantity: number;
  constructor(private ShoppingCart: ShoppingCart,private producrService: ProductService, private router: Router) { }

  ngOnInit() {
    this.quantity = null;
    this.name = "";
    if (localStorage.getItem('token') != null)
      this.user = true;
    this.producrService.getProducts();
    this.productSub = this.producrService.getProductUpdateListener().subscribe((productData: Product[]) => {
      this.ourProducts = productData;
    });

  }
  onMultiSearch() {
    this.producrService.getProducts();
    setTimeout(() => {
      if (this.name != "")
        this.ourProducts = this.ourProducts.filter(res => {
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        });
      if (this.price != null)
        this.ourProducts = this.ourProducts.filter(res => {
          return res.price == this.price.valueOf();
        });
      if (this.quantity != null)
        this.ourProducts = this.ourProducts.filter(res => {
          return res.quantity == this.quantity.valueOf();
        });
    }, 10);
  }


  onLogin() {
    this.router.navigate(['/login']);
  }
  onSignIn() {
    this.router.navigate(['/sign']);
  }

  onHome() {
    this.router.navigate(['/home-page']);
  }
  onPie() {
    this.router.navigate(['/app-pie']);
  }
  onProducts() {
    this.router.navigate(['/app-our-products']);
  }
  onShoppingList() {
    this.router.navigate(['/app-shopping-cart']);
  }
  onDelete(id: string) {
    this.token = localStorage.getItem('token');
    this.producrService.deleteProduct(this.token,id);
  }
  onEdit(id: string, name: string, price: number, quantity: number, category: string) {
    this.token = localStorage.getItem('token');
    this.router.navigate(['/app-product-edit']);
    //this.producrService.editProduct(this.token, id, name,price, quantity, category);
  }
  onCreate() {
    this.router.navigate(['/app-product-create']);
  }
  onAddToCart(productId,name,price,productQuantity,category) {
   this.token = localStorage.getItem('token');
    this.ShoppingCart.addProduct(this.token, productId, name, price, productQuantity, category);
  }
  onSmartSearch() {
    if (this.smartsearch === "") {
      alert("Null Search");
      this.producrService.getProducts();
    }
    else {
    this.producrService.smartSearch(this.smartsearch.split(" "));
    }
    //setTimeout(() => {
      //this.producrService.getsmartSearchUpdateListener().subscribe((result: Product[]) => {
      //  this.ourProducts  =result;
      //});
      
  //  }, 500);
  }
}
