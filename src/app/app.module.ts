import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

//imports Angular Material 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavListComponent } from './shared/components/nav-list/nav-list.component';
import { NavItemComponent } from './shared/components/nav-item/nav-item.component';
import { MediaMatcher, BreakpointObserver } from '@angular/cdk/layout';
import { TopIconsComponent } from './layout/top-icons/top-icons.component';



@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    NavItemComponent,
    TopIconsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [MediaMatcher, BreakpointObserver],
  bootstrap: [AppComponent]
})
export class AppModule { }
