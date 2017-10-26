import { Component, OnInit } from '@angular/core';

import { Portfolio } from "../model/portfolio";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  portfolios:Portfolio[] = [
    new Portfolio("Test 1","MVC","portfolio-detail-left.html","assets/img/blog6.jpg"),
    new Portfolio("Test 2","MVC","portfolio-detail-left.html","assets/img/blog10_h.jpg"),
    new Portfolio("Test 3","MVC","portfolio-detail-left.html","assets/img/blog3.jpg"),
    new Portfolio("Test 4","MVC","portfolio-detail-left.html","assets/img/blog9.jpg"),
    new Portfolio("Test 5","MVC","portfolio-detail-left.html","assets/img/blog14.jpg"),
    new Portfolio("Test 6","MVC","portfolio-detail-left.html","assets/img/blog4.jpg"),
    new Portfolio("Test 6","MVC","portfolio-detail-left.html","assets/img/blog15.jpg")
  ];

  constructor() {
    
   }

  ngOnInit() {
  }

}
