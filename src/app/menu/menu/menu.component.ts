import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Menu[] = [
    new Menu("Home", "", "PRS home page"),
    new Menu("About", "/about", "About PRS"),
    new Menu("Users", "/users/list", "List of all users"),
    new Menu("Vendors", "/vendors/list", "List of all vendors"),
    new Menu("Products", "/products/list", "List of all products"),
    new Menu("Requests", "/requests/list", "List of all requests"),
    new Menu("Review", "/requests/review/1", "List of requests you can review")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
