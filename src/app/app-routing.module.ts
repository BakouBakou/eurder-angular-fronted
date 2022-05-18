import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCustomerComponent} from "./customers/create-customer/create-customer.component";
import {CustomerOverviewComponent} from "./customers/customer-overview/customer-overview.component";
import {CustomerDetailComponent} from "./customers/customer-detail/customer-detail.component";

const routes: Routes = [
  {path:'customers/create', component: CreateCustomerComponent},
  {path:'customers/:id', component: CustomerDetailComponent},
  {path:'customers', component: CustomerOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
