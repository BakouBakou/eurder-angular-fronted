import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:'customers/create', component: CreateCustomerComponent},
  {path:'customers/:id', component: AppComponent}, // to replace with customer detail component later
  {path:'customers', component: AppComponent}, // to replace with customer detail component later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
