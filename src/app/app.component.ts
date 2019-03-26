import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Socket } from "ngx-socket-io";
import { UserService } from './servises/user.service';
import { SharedService } from './servises/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navBar: boolean = false;
  private navBarSub: Subscription;

  constructor(private router: Router, public socket: Socket, private userService: UserService, public sharedService: SharedService) {
   this.socket.emit('connection', { name: "mulmul" });
  }
  ngOnInit() {
    this.navBarSub = this.sharedService.getViewNavBarListener().subscribe((navBar: boolean) => {
      this.navBar = navBar;
    });
    this.router.navigate([]);
  }

}

