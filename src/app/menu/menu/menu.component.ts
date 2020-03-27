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
    new Menu("Users", "/users/list", "List of users"),
    new Menu("Products", "/products/list", "List of products"),
    new Menu("Vendors", "/vendors/list", "List of vendors"),
    new Menu("Requests", "/requests/list", "List of requests")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
