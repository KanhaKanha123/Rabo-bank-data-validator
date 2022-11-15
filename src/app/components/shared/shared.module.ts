import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateDuplicateValidationComponent } from './templates/template-duplicate-validation/template-duplicate-validation.component';
import { TemplateEndBalanceValidationComponent } from './templates/template-end-balance-validation/template-end-balance-validation.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TemplateDuplicateValidationComponent,
    TemplateEndBalanceValidationComponent,
    TableComponent
  ],
  imports: [BrowserModule],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
