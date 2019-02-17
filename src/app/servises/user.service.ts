import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({ providedIn: 'root' })
export class UserService {
 // private notes: Note[] = [];
//  private noteUpdated = new Subject<Note[]>();
//  private note: Note;
 // private noteEdit = new BehaviorSubject<Note>(this.note);

  constructor(private http: HttpClient) {
  }
  /* not fixed create*/
  createNewUser(user: User) {
    this.http.post<{ message:string, token:string }>('http://localhost:3000/api/users', user)
      .subscribe((responseData) => {
        alert(responseData.message + " " + responseData.token);
      });
  }
  /*
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
