import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public theme: string = 'theme-light';
  public isMobile:boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Web])
      .subscribe(
        (result: BreakpointState) => {
           this.isMobile = !result.matches;
        }
      )
  }

  selectedTheme(ev){
    this.theme = ev;
  }
}
