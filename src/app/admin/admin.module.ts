import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '../shared/admin-routing.module';

import { AdminComponent } from './admin.component';
import { AdminDetailComponent } from './shared/admin-detail/admin-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDetailComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
