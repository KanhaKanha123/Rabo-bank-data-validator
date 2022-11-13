import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataValidatorComponent } from './components/validator/data-validator/data-validator.component';
import { HttpClientModule } from '@angular/common/http';
import { TableDuplicateValidationComponent } from './components/shared/table-duplicate-validation/table-duplicate-validation.component';
import { TableEndBalanceValidationComponent } from './components/shared/table-end-balance-validation/table-end-balance-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DataValidatorComponent,
    TableDuplicateValidationComponent,
    TableEndBalanceValidationComponent
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
