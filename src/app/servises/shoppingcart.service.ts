import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { ShoppingCarts } from '../models/shoppingcart.model';
import { Router } from '@angular/router';
import { bigSpender } from '../models/bigSpender';
import { SharedService } from './shared.service';

@Injectable({ providedIn: 'root' })
export class ShoppingCart {
  private orders: ShoppingCarts[] = [];
  private shoppingCartProducts: Product[] = [];
  private bigSpenders: bigSpender[];
  private cartUpdated = new BehaviorSubject<Product[]>(this.shoppingCartProducts);
  private ordersUpdated = new BehaviorSubject<ShoppingCarts[]>(this.orders);
  private bigUpdated = new BehaviorSubject<bigSpender[]>(this.bigSpenders);
  private headers: HttpHeaders

  constructor(private http: HttpClient, private router: Router, public sharedService: SharedService) {
    this.sharedService.getTokenListener().subscribe((headers: HttpHeaders) => {
      this.headers = headers;
    });
  }

  getUserShoppingCart() {
    this.http.get<{ message: string, cartProduct: ShoppingCarts }>('http://localhost:3000/sn/myShoppingCart', { headers: this.headers })
      .subscribe((responseData) => {
        if (responseData.message === 'your cart is empty')
          this.shoppingCartProducts = [];
        else
          this.shoppingCartProducts = responseData.cartProduct.cart;
        this.cartUpdated.next([...this.shoppingCartProducts]);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  addProduct(productId: string, name: string, price: number, category: string) {
    const addproduct = { productId: productId, quantity: 1 };
    this.http.put<{ message: string }>('http://localhost:3000/sn/myShoppingCart/addProduct', addproduct, { headers: this.headers })
      .subscribe((responsedata) => {
        const edittedproduct: Product = {
          _id: productId,
          name: name,
          price: price,
          quantity: 1,
          category: category
        };
        alert(responsedata.message);
        this.shoppingCartProducts.push(edittedproduct);
        this.cartUpdated.next([...this.shoppingCartProducts]);
      }, error => {
        alert('error' + ":" + error.message);
      });
  }

  deleteProduct(productId: string) {
    this.http.put<{ message: string }>('http://localhost:3000/sn/myShoppingCart/removeProduct', { productId: productId }, { headers: this.headers })
      .subscribe((responseData) => {
        const updateProducts = this.shoppingCartProducts.filter(product => product._id != productId);
        this.shoppingCartProducts = updateProducts;
        this.cartUpdated.next([...this.shoppingCartProducts]);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  deleteCart() {
    this.http.delete<{ message: string }>('http://localhost:3000/sn/myShoppingCarts/delete', { headers: this.headers })
      .subscribe((responseData) => {
        this.shoppingCartProducts = [];
        this.cartUpdated.next([...this.shoppingCartProducts]);
        this.router.navigate(['/home-page']);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  editProduct( id: string, name: string, price: number, quantity: number, category: string) {
    const editproduct = [{ _id: id, name: name, price: price, quantity: quantity, category: category }];
    this.http.put<{ message: string }>('http://localhost:3000/sn/myShoppingCart/updateCart', { editProducts: editproduct }, { headers: this.headers })
      .subscribe((responseData) => {
        const updateProducts = this.shoppingCartProducts.filter(editproduct => editproduct._id != id);
        const edittedProduct: Product = {
          _id: id,
          name: name,
          price: price,
          quantity: quantity,
          category: category
        };
        updateProducts.push(edittedProduct);
        this.shoppingCartProducts = updateProducts;
        this.cartUpdated.next([...this.shoppingCartProducts]);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  payment() {
    this.http.get<{ message: string, newCart: ShoppingCarts }>('http://localhost:3000/sn/myShoppingCart/payment', { headers: this.headers })
      .subscribe((responseData) => {
        if (responseData.message === 'cart has been filterd') {
          alert(responseData.message);
          this.shoppingCartProducts = responseData.newCart.cart;
          this.cartUpdated.next([...this.shoppingCartProducts]);
        } else {
          this.shoppingCartProducts = [];
          this.cartUpdated.next([...this.shoppingCartProducts]);
          this.router.navigate(['/home-page']);
        }
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }


  bigSpender() {
    this.http.get<{ message: string, cities: bigSpender[] }>('http://localhost:3000/sn/bigSpenders')
      .subscribe((responseData) => {
        this.bigSpenders = responseData.cities;
        this.bigUpdated.next([...this.bigSpenders]);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  getOrders(token: string) {
    this.http.get<{ message: string, ordersProducts: ShoppingCarts[] }>('http://localhost:3000/sn/myOrders', { headers: this.headers })
      .subscribe((responseData) => {
        if (responseData.message === 'your order list is empty') {
          alert(responseData.message);
          this.orders = [];
        }
        else
          this.orders = responseData.ordersProducts;
        this.ordersUpdated.next([...this.orders]);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  getShoppingProductUpdateListener() {
    return this.cartUpdated.asObservable();
  }

  getOrdersProductUpdateListener() {
    return this.ordersUpdated.asObservable();
  }

  getbigSpendersUpdateListener() {
    return this.bigUpdated.asObservable();
  }
}
