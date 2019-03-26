import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model'
import { error } from 'util';
import { tokenKey } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private cordinate: number[] = [31.9702909, 34.768544399999996];
  private cordinateUpdated = new BehaviorSubject<number[]>(this.cordinate);
  private connect: boolean[] = [false,false];
  private userRole = new BehaviorSubject<boolean[]>(this.connect);
  private userName: string = '';
  private userUpdated = new BehaviorSubject<string>(this.userName);
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router, public sharedService: SharedService) {
    this.sharedService.getTokenListener().subscribe((headers: HttpHeaders)=> {
      this.headers = headers;
    });
    if (this.headers.has("Authorization")) {
      this.connect[0] = true;
      this.userName = localStorage.getItem('name');
      this.userUpdated.next(this.userName);
      this.checkRole();
      this.getCordinates();
    }
  }

  createNewUser(user: User) {
    if (user.password == user.passwordConf) {
      this.http.post<{ message: string, token: string }>('http://localhost:3000/sn/users/create', user)
        .subscribe((responseData) => {
          localStorage.setItem('token', responseData.token);
          localStorage.setItem('name', user.username);
          this.connect[0] = true;
          this.connect[1] = false;
          this.userRole.next([...this.connect]);
          this.userName = user.username;
          this.userUpdated.next(this.userName);
          this.sharedService.setToken(responseData.token);
          this.getCordinates();
          this.router.navigate(['/home-page']);
        }, error => {
          alert('Error' + ":" + error.massage);
        });
    } else
      alert('Passwords do not match.');
  }

  logIn(user: User) {
    this.http.post<{ message: string, token: string }>('http://localhost:3000/sn/profile', user)
      .subscribe((responseData) => {
        if (responseData.message != 'Wrong Credentials') {
          localStorage.setItem('token', responseData.token);
          localStorage.setItem('name', user.username);
          this.sharedService.setToken(responseData.token);
          this.connect[0] = true;
          this.userName = user.username;
          this.userUpdated.next(this.userName);
          this.checkRole();
          this.getCordinates();
          this.router.navigate(['/home-page']);
        } else
          alert(responseData.message);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.sharedService.deleteToken();
    this.connect[0] = false;
    this.connect[1] = false;
    this.userRole.next([...this.connect]);
    this.userName = '';
    this.userUpdated.next(this.userName);
    this.cordinate = [31.9702909, 34.768544399999996];
    this.cordinateUpdated.next([...this.cordinate]);
  }

  checkRole() {
    this.http.get<{ message: string }>('http://localhost:3000/sn/users/checkRole', { headers: this.headers })
      .subscribe((responseData) => {
        if (responseData.message == "Admin")
          this.connect[1] = true;
        else
          this.connect[1] = false;
        this.userRole.next([...this.connect]);
      });
  }

  getCordinates() {
    this.http.get<{ message: string, lat: number, long: number }>('http://localhost:3000/sn/users/location', { headers: this.headers })
      .subscribe((responseData) => {
        this.cordinate = [responseData.lat, responseData.long];
        this.cordinateUpdated.next([...this.cordinate]);
      }, error => {
        alert('Error' + ":" + error.message);
      });
  }

  getUserUpdateListener() {
    return this.userUpdated.asObservable();
  }

  getUserRoleListener() {
    return this.userRole.asObservable();
  }

  getCordinateUpdateListener() {
    return this.cordinateUpdated.asObservable();
  }

}
