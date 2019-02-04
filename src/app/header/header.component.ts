import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGuest() {
    this.router.navigate(['/shopping-list']);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

}
