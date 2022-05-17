import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {LayoutComponent} from "./layout/layout/layout.component";

const routes: Routes = [
  {path:'customers/create', component: CreateCustomerComponent},
  {path:'customers/:id', component: LayoutComponent}, // to replace with customer detail component later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
