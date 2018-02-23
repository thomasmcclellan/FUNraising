import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/components/admin.component';
import { AdminListComponent } from '../admin/shared/admin-list/admin-list.component';
import { AccountDetailComponent } from '../admin/components/account-detail/account-detail.component';


const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'adminList', component: AdminListComponent },
  { path: 'accountDetail', component: AccountDetailComponent }
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