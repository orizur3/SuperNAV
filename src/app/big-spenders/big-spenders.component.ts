import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../servises/shoppingcart.service';
import { bigSpender } from '../models/bigSpender';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from '../servises/shared.service';

@Component({
  selector: 'app-big-spenders',
  templateUrl: './big-spenders.component.html',
  styleUrls: ['./big-spenders.component.css']
})
export class BigSpendersComponent implements OnInit {
  private bigSpenders: bigSpender[] = [];
  private bigSpendersSub: Subscription;
  constructor(private ShoppingCart: ShoppingCart, private router: Router, public sharedService: SharedService) { }

  ngOnInit() {
    this.ShoppingCart.bigSpender();
    setTimeout(() => {
      this.bigSpendersSub = this.ShoppingCart.getbigSpendersUpdateListener().subscribe((result: bigSpender[]) => {
        this.bigSpenders = result;
      });
    }, 500);



  }
  onHome() {
    this.sharedService.viewNavBar(false);
    this.router.navigate(['/home-page']);
  }
 
}
