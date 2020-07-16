import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './controllers/home/home.component';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './controllers/about/about.component';
import { TablesPurchasesComponent } from './controllers/tables-purchases/tables-purchases.component';
import { TablesSalesComponent } from './controllers/tables-sales/tables-sales.component';
import { TablesSalesInvoicesComponent } from './controllers/tables-sales-invoices/tables-sales-invoices.component';
import { TablesAccountsComponent } from './controllers/tables-accounts/tables-accounts.component';
import { TablesCustomersComponent } from './controllers/tables-customers/tables-customers.component';
import { TablesSuppliersComponent } from './controllers/tables-suppliers/tables-suppliers.component';
import { TablesProductsComponent } from './controllers/tables-products/tables-products.component';
import { TablesTaxesComponent } from './controllers/tables-taxes/tables-taxes.component';
import { DashboardOneYearBeforeComponent } from './controllers/dashboard-one-year-before/dashboard-one-year-before.component';
import { DashboardTwoYearsBeforeComponent } from './controllers/dashboard-two-years-before/dashboard-two-years-before.component';
import { DashboardThreeYearsBeforeComponent } from './controllers/dashboard-three-years-before/dashboard-three-years-before.component';
import { DashboardFourYearsBeforeComponent } from './controllers/dashboard-four-years-before/dashboard-four-years-before.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    AboutComponent,
    TablesPurchasesComponent,
    TablesSalesComponent,
    TablesSalesInvoicesComponent,
    TablesAccountsComponent,
    TablesCustomersComponent,
    TablesSuppliersComponent,
    TablesProductsComponent,
    TablesTaxesComponent,
    DashboardOneYearBeforeComponent,
    DashboardTwoYearsBeforeComponent,
    DashboardThreeYearsBeforeComponent,
    DashboardFourYearsBeforeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
