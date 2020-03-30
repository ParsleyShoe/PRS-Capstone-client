import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  menu:Menu;

  constructor(
    public syssvc:SystemService
  ) { }

  ngOnInit(): void {
  }

}
