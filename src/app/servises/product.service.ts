import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { DeleteJson } from '../models/deleteJson';
import { pieProJson } from '../models/piePro';
@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];
  private edit: Product;
  private top8Sales: Product[] = [];
  private profitable: pieProJson[] = [];
  private profitableUpdated = new BehaviorSubject<pieProJson[]>(this.profitable);
  private productUpdated = new BehaviorSubject<Product[]>(this.products);
  private productTopSales = new BehaviorSubject<Product[]>(this.top8Sales);


  constructor(private http: HttpClient) {
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
       this.top8Sales = responseData.cartProducts;
       this.productUpdated.next([...this.top8Sales]);
     }, error => {
       alert('Error' + ":" + error.message);
     }
     );
       
  }

  profitableFunc() {
    this.http.get<{ message: string, cartProducts: pieProJson[] }>('http://localhost:3000/sn/topProfitable')
      .subscribe((responseData) => {
        this.profitable = responseData.cartProducts;
        this.profitableUpdated.next([...this.profitable]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );

  }

  getProfitableUpdateListener() {
    return this.profitableUpdated.asObservable();
  }

  getProductUpdateListener() {
    return this.productUpdated.asObservable();
  }

  searchByName(name: string) {
    this.getProducts();
    const searchProduct: Product[] = this.products.filter(p => p.name == name);
    this.products = searchProduct;
    this.productUpdated.next([...this.products]);
  }

  getShoppingList(id: string) {
    this.products = [];
    this.productUpdated.next([...this.products]);
  }


  deleteProduct(token: string, id: string) {
    const deleteJson: DeleteJson = {
      token: token,
      productId: id
    };
    this.http.put<{ message: string }>('http://localhost:3000/sn/products/delete', deleteJson)
      .subscribe((responseData) => {
        const updateProducts = this.products.filter(product => product._id != id);
        this.products = updateProducts;
        this.productUpdated.next([...this.products]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }
  createProduct(token: string, name: string, price: number, quantity: number, category: string) {
    const createproduct = { token: token, name: name, price: price, quantity: quantity, category: category };
    this.http.post<{ message: string, productId: string }>('http://localhost:3000/sn/products/create', createproduct)
      .subscribe((responseData) => {
        const product: Product = {
          _id: responseData.productId,
          name: name,
          price: price,
          quantity: quantity,
          category: category
        };
        this.products.push(product);
        this.productUpdated.next([...this.products]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  editProduct(token: string, id: string, name: string, price: number, quantity: number, category: string) {
    const editproduct = { token: token, productId: id, name: name, price: price, quantity: quantity, category: category };
    this.http.put<{ message: string }>('http://localhost:3000/sn/products/edit_product', editproduct)
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
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  smartSearch(searchProduct:string[]) {
    this.http.post<{ message: string, found: Product[] }>('http://localhost:3000/sn/products/smartSearch', { productNames:searchProduct })
      .subscribe((responseData) => {
        this.products = responseData.found;
        if (responseData.message === 'product dosent exist')
          alert(responseData.message);
        this.productUpdated.next([...this.products]);
      }, error => {
        alert('Error' + ":" + error.message);
      })
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
}
