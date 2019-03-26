import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servises/product.service';
import { UserService } from '../servises/user.service';
import { Subscription } from 'rxjs';
import { GoogleMap, google } from '@agm/core/services/google-maps-types';
import { Router } from '@angular/router';
import { SharedService } from '../servises/shared.service';

@Component({
  selector: 'sn-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username: string='';
  private lat: number = 0;
  private long: number = 0;
  private cordinateSub: Subscription;
  private connectSub: Subscription;
  private userSub: Subscription;
  user: boolean = false;
  admin: boolean = false;

  constructor(private producrService: ProductService, private userService: UserService, private router: Router, public sharedService: SharedService) { }

  ngOnInit() {
    this.userSub = this.userService.getUserUpdateListener().subscribe((user: string) => {
      this.username = user;
    });

      this.connectSub = this.userService.getUserRoleListener().subscribe((connect: boolean[]) => {
        this.user = connect[0];
        this.admin = connect[1];
    });

    this.cordinateSub = this.userService.getCordinateUpdateListener().subscribe((productData: number[]) => {
      this.lat = productData[0];
      this.long = productData[1];
    });

  }

  onPie() {
    this.sharedService.viewNavBar(true);
    this.router.navigate(['/pie']);
  }

  onSpenderPie() {
    this.sharedService.viewNavBar(true);
    this.router.navigate(['/big-spenders']);
  }

}
