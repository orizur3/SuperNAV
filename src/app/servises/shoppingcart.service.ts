import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { DeleteJson } from '../models/deleteJson';
import { ShoppingCarts } from '../models/shoppingcart.model';
import { Router } from '@angular/router';
import { bigSpender } from '../models/bigSpender';

@Injectable({ providedIn: 'root' })
export class ShoppingCart {
  private cart: Product[];
  private bigCitySpenders = [{}];
  private updateReq = {};
  private shoppingCart: ShoppingCarts;
  private orders: ShoppingCarts[]=[];
  private shoppingCartProducts: Product[];
  private bigSpenders: bigSpender[];
  private cartUpdated = new BehaviorSubject<Product[]>(this.shoppingCartProducts);
  private ordersUpdated = new BehaviorSubject<ShoppingCarts[]>(this.orders);
  private bigUpdated = new BehaviorSubject<bigSpender[]>(this.bigSpenders);
  constructor(private http: HttpClient, private router: Router) {
  }
  getUserShoppingCart(token: string) {//user._id
    this.http.post<{ message: string, cartProduct: ShoppingCarts }>('http://localhost:3000/sn/myShoppingCart', { token: token })
      .subscribe((responseData) => {
        if (responseData.message === 'your cart is empty')
          this.shoppingCartProducts = [];
        else
          this.shoppingCartProducts = responseData.cartProduct.cart;
        this.cartUpdated.next([...this.shoppingCartProducts]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  getShoppingProductUpdateListener() {
    return this.cartUpdated.asObservable();
  }

  getOrdersProductUpdateListener() {
    return this.ordersUpdated.asObservable();
  }

  addProduct(token: string, productId: string, name: string, price: number, productQuantity: number, category: string) {
    const addproduct = { token: token, productId: productId, quantity: 1 };
    this.http.put<{ message: string }>('http://localhost:3000/sn/myShoppingCart/addProduct', addproduct)
      .subscribe((responsedata) => {
        const updateproducts = this.shoppingCartProducts.filter(addproduct => addproduct._id != productId);
        const edittedproduct: Product = {
          _id: productId,
          name: name,
          price: price,
          quantity: productQuantity,
          category: category
        };
        updateproducts.push(edittedproduct);
        this.shoppingCartProducts = updateproducts;
        this.cartUpdated.next([...this.shoppingCartProducts]);
      }, error => {
        alert('error' + ":" + error.message);
      }
      );
  }

  deleteProduct(token: string, productId: string) {
    const deleteJson: DeleteJson = {
      token: token,
      productId: productId
    };
    this.http.put<{ message: string }>('http://localhost:3000/sn/myShoppingCart/removeProduct', deleteJson)
      .subscribe((responseData) => {
        const updateProducts = this.shoppingCartProducts.filter(product => product._id != productId);
        this.shoppingCartProducts = updateProducts;
        this.cartUpdated.next([...this.shoppingCartProducts]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  editProduct(token: string, id: string, name: string, price: number, quantity: number, category: string) {
    const editproduct = [{ _id: id, name: name, price: price, quantity: quantity, category: category }];
    this.updateReq = { token: token, editProducts: editproduct };
    this.http.put<{ message: string }>('http://localhost:3000/sn/myShoppingCart/updateCart', this.updateReq)
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
      }
      );
  }

  payment(token: string) {

    this.http.put<{ message: string, newCart: ShoppingCarts }>('http://localhost:3000/sn/myShoppingCart/payment', { token: token })
      .subscribe((responseData) => {
        alert(responseData.message);
        if (responseData.message === 'cart has been filterd') {
          alert(responseData.newCart.cart[0].name);
          this.shoppingCartProducts = responseData.newCart.cart;
          this.cartUpdated.next([...this.shoppingCartProducts]);
        } else {
          this.shoppingCartProducts = [];
          this.cartUpdated.next([...this.shoppingCartProducts]);
          this.router.navigate(['/home-page']);
        }
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );

  }


  bigSpender() {
    this.http.get<{ message: string, cities: bigSpender[] }>('http://localhost:3000/sn/bigSpenders')
      .subscribe((responseData) => {
        this.bigSpenders = responseData.cities;
        this.bigUpdated.next([...this.bigSpenders]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }


  getbigSpendersUpdateListener() {
    return this.bigUpdated.asObservable();
  }
  getOrders(token:string) {
    this.http.post<{ message: string, ordersProducts: ShoppingCarts[] }>('http://localhost:3000/sn/myOrders', { token: token })
      .subscribe((responseData) => {
        if (responseData.message === 'your order list is empty') {
          alert('your order list is empty');
          this.orders = [];
        }
        else
          this.orders = responseData.ordersProducts;
        this.ordersUpdated.next([...this.orders]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );


  }




  //getBigSpender() {
  //  this.http.get<{ message: string, cities: [{city:string,}] }>('http://localhost:3000/sn/bigSpenders')
  //    .subscribe((responseData) => {
  //      this.products = responseData.products;
  //      this.productUpdated.next([...this.products]);
  //    }, error => {
  //      alert('Error' + ":" + error.message);
  //    }
  //    );
  //}


}



  /*
  editNote(id: string,title:string,content:string) {
    const note: Note = { _id: id, title: title, content: content };
    this.http.put<{ message: string }>('http://localhost:3000/api/notes',note)
      .subscribe(noteData => {
        const updatedNotes = this.notes.filter(note => note._id != id);
        updatedNotes.push(note);
        this.notes = updatedNotes;
        this.noteUpdated.next([...this.notes]);
      });
  }
  getNotes() {
    this.http.get<{ message: string, notes: Note[] }>
      ('http://localhost:3000/api/notes')
      .subscribe(noteData => {
        this.notes = noteData.notes;
        this.noteUpdated.next([...this.notes]);
      });
  }

  getNoteUpdateListener() {
    return this.noteUpdated.asObservable();
  }

  addNote(title: string, content: string) {
    const note: Note = { _id: null, title: title, content: content };
    this.http.post<{ message: string, noteId: string }>('http://localhost:3000/api/notes', note)
      .subscribe((responseData) => {
        note._id = responseData.noteId;
        this.notes.push(note);
        this.noteUpdated.next([...this.notes]);
      });
  }

  deleteNote(noteId: string) {
    this.http.delete < { message: string }>("http://localhost:3000/api/notes/" + noteId)
      .subscribe(dataMessage => {
        const updatedNotes = this.notes.filter(note => note._id != noteId);
        this.notes = updatedNotes;
        this.noteUpdated.next([...this.notes]);
      });
  }

  updateNote(note: Note) {
    this.noteEdit.next(note);
  }
  getNoteEditListener() {
    return this.noteEdit.asObservable();
  }
  */

