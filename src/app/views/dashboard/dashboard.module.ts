import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule} from '@angular/material/card';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule
  ],
  declarations: [HomeComponent]
})
export class DashboardModule { }
