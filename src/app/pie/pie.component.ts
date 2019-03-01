import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Router } from '@angular/router';
import { ProductService } from '../servises/product.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { pieProJson } from '../models/piePro';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  user: boolean = false;
  constructor(private router: Router, private producrService: ProductService) {
  }
  private productSub: Subscription;
  private data: pieProJson[] = [];
  private topSalesData: number[] = [];
  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.user = true;
    this.producrService.profitableFunc();
    setTimeout(() => {
      this.productSub = this.producrService.getProfitableUpdateListener().subscribe((productData: pieProJson[]) => {
        this.data = productData;
      });
      var color = d3.scaleOrdinal(["red", "blue", "yellow", "brown", "cyan", "magenta", "pink", "orange","purple","rose","gold","silver"]);
      var svg = d3.select("p").append("svg")
        .attr("width", 750)
        .attr("height", 750).append('g')
        .attr('transform', 'translate(' + (700 / 2) + ',' + (700 / 2) + ')');
      var arc = d3.arc<any>().outerRadius(Math.min(700, 700) / 2).innerRadius(0);
      var pie = d3.pie<any>().value(function (d) { return d.sales; }).sort(null);
      var path = svg.selectAll(".arc").data(pie(this.data)).enter().append("g").attr("class", "arc");
      var r = 0;
      var p = Math.PI * 2;
      //var group = canvas.append("g")
      //.attr("transform", "translate(300,300)");



      path.append("path").attr("d", arc).attr("fill", function (d) { return color(d.data.ProductName); });
      path.append("text").attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")" })
        .attr("text-anchor", "middle")
        .attr("font-size", "1.2em")
        .text(function (d) { return (d.data.ProductName + "-" + d.data.sales); });
    }, 500);
  }
  onHome() {
    this.router.navigate(['/home-page']);
  }
}
