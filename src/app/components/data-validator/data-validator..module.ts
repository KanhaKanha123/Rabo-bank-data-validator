import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataValidatorComponent } from './data-validator.component';
import { SharedModule } from '../../components/shared/shared.module';
@NgModule({
  declarations: [
    DataValidatorComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ]
})
export class DataValidatorModule { }
