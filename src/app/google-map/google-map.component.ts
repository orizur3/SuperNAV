import { Component, OnInit } from '@angular/core';
import { UserService } from '../servises/user.service';
import { GoogleMap, google } from '@agm/core/services/google-maps-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sn-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  private lat: number = 0;
  private long: number = 0;
  private cordinateSub: Subscription;
  private token: string = '';
  private tokenSub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.cordinateSub = this.userService.getCordinateUpdateListener().subscribe((productData: number[]) => {
      this.lat = productData[0];
      this.long = productData[1];
    });
  }
}

