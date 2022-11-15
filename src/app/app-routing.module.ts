import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataValidatorComponent} from './components/data-validator/data-validator.component';
const routes: Routes = [{ path: '', component: DataValidatorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
