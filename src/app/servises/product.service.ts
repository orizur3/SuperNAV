import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject  } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];
  private productUpdated = new BehaviorSubject<Product[]>(this.products);

  private proc1: Product = {
    _id: '1',
    name: 'tomato',
    price: 20
  };
  private proc2: Product = {
    _id: '2',
    name: 'pickel',
    price: 20
  };
  private proc3: Product = {
    _id: '3',
    name: 'orange',
    price: 25
  };
  private proc4: Product = {
    _id: '4',
    name: 'egeplant',
    price: 7
  };
  private proc5: Product = {
    _id: '5',
    name: 'sockes',
    price: 50
  };


  constructor(private http: HttpClient) {
  }

  getProducts() {
    this.products = [];
    this.products.push(this.proc1);
    this.products.push(this.proc2);
    this.products.push(this.proc3);
    this.products.push(this.proc4);
    this.products.push(this.proc5);
    this.productUpdated.next([...this.products]);
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
    this.products.push(this.proc2);
    this.products.push(this.proc3);
    this.productUpdated.next([...this.products]);
  }

  editProduct(id: string) {
    this.getProducts();
    const product: Product = this.products.find(p => p._id == id);
    this.getShoppingList(null);
    this.products.push(product);
    this.productUpdated.next([...this.products]);
  }
  /*
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
  updateNote(note: Note) {
    this.noteEdit.next(note);
  }
  getNoteEditListener() {
    return this.noteEdit.asObservable();
  }
  */
}
