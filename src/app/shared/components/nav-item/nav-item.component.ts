import { Component, OnInit } from '@angular/core';
import { NAVIGATION } from '../../../../_nav';

@Component({
  selector: 'facode-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  public sidenav_list_item = NAVIGATION.sidenav;

  constructor() { }

  ngOnInit() {
  }

}
