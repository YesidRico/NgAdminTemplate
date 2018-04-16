import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'facode-top-icons',
  templateUrl: './top-icons.component.html',
  styleUrls: ['./top-icons.component.scss']
})
export class TopIconsComponent implements OnInit {

  @Input('sidenavEnd') sidenav:MatSidenav;
  @Input('themeDefault') theme_default:string;
  @Output() theme = new EventEmitter<string>();


  public themes_list: Array<any> = [
    {
      theme: 'Dark',
      value: 'theme-dark'
    },
    {
      theme: 'Light',
      value: 'theme-light'
    }
  ]

  constructor() { }

  ngOnInit() { }

  sidenavToggle(){
    this.sidenav.toggle();
  }

  selectedTeheme(theme){
    this.theme.emit(theme.value);
  }

}
