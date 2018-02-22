import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { AdminDetailComponent } from '../admin/shared/admin-detail/admin-detail.component';


const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'adminDetail', component: AdminDetailComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }