import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { pieProJson } from '../models/piePro';
import { Socket } from "ngx-socket-io";
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];
  private profitable: pieProJson[] = [];
  private profitableUpdated = new BehaviorSubject<pieProJson[]>(this.profitable);
  private productUpdated = new BehaviorSubject<Product[]>(this.products);
  private headers: HttpHeaders;


  constructor(private router: Router, private http: HttpClient, public socket: Socket, public sharedService: SharedService) {
    this.sharedService.getTokenListener().subscribe((header: HttpHeaders) => {
      this.headers = header;
    });
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
    this.productUpdated.next([...this.products]);
  }

  getProducts() {
    this.http.get<{ message: string, products: Product[] }>('http://localhost:3000/sn/products')
      .subscribe((responseData) => {
        this.products = responseData.products;
        this.productUpdated.next([...this.products]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  topSales() {
    this.http.get<{ message: string, cartProducts: Product[] }>('http://localhost:3000/sn/topSales')
     .subscribe((responseData) => {
       this.products = responseData.cartProducts;
       this.productUpdated.next([...this.products]);
     }, error => {
       alert('Error' + ":" + error.message);
     }); 
  }

  profitableFunc() {
    this.http.get<{ message: string, cartProducts: pieProJson[] }>('http://localhost:3000/sn/topProfitable')
      .subscribe((responseData) => {
        this.profitable = responseData.cartProducts;
        this.profitableUpdated.next([...this.profitable]);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }


  deleteProduct(id: string) {
    const params = new HttpParams().set('id', id);
    this.http.delete<{ message: string }>('http://localhost:3000/sn/products/delete' , { headers: this.headers, params})
      .subscribe((responseData) => {  
        const updateProducts = this.products.filter(product => product._id != id);
        this.products = updateProducts;
        this.productUpdated.next([...this.products]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  createProduct(name: string, price: number, quantity: number, category: string) {
    const createproduct = { name: name, price: price, quantity: quantity, category: category };
    this.http.post<{ message: string, productId: string }>('http://localhost:3000/sn/products/create', createproduct, { headers: this.headers })
      .subscribe((responseData) => {
        const product = {
          _id: responseData.productId,
          name: name,
          price: price,
          quantity: quantity,
          category: category
        };
        this.socket.emit('new-product', product);
        this.addProduct(product);
        this.router.navigate(['/our-products']);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  editProduct( id: string, name: string, price: number, quantity: number, category: string) {
    const editproduct = { productId: id, name: name, price: price, quantity: quantity, category: category };
    this.http.put<{ message: string }>('http://localhost:3000/sn/products/edit_product', editproduct, { headers: this.headers })
      .subscribe((responseData) => {
        const updateProducts = this.products.filter(editproduct => editproduct._id != id);
        const edittedProduct: Product = {
          _id: id,
          name: name,
          price: price,
          quantity: quantity,
          category: category
        };
        updateProducts.push(edittedProduct);
        this.products = updateProducts;
        this.productUpdated.next([...this.products]);
        this.router.navigate(['/our-products']);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  smartSearch(searchProduct: string[]) {
    this.http.post<{ message: string, found: Product[] }>('http://localhost:3000/sn/products/smartSearch', { productNames: searchProduct }, { headers: this.headers })
      .subscribe((responseData) => {
        this.products = responseData.found;
        if (responseData.message === 'product dosent exist')
          alert(responseData.message);
        this.productUpdated.next([...this.products]);
      }, error => {
        alert('Error' + ":" + error.message);
      })
  }

  getProfitableUpdateListener() {
    return this.profitableUpdated.asObservable();
  }

  getProductUpdateListener() {
    return this.productUpdated.asObservable();
  }
}
