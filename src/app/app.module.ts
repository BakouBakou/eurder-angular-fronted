import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {CreateCustomerComponent} from './customers/create-customer/create-customer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CustomerOverviewComponent } from './customers/customer-overview/customer-overview.component';
import { CustomerLastNameStartsWithPipe } from './pipes/customer-last-name-starts-with.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerOverviewComponent,
    CustomerLastNameStartsWithPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
