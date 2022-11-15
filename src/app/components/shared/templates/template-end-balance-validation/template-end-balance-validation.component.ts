import { Component, Input } from '@angular/core';
import { invalidGenericType } from '../../../../helpers/types';

@Component({
  selector: 'app-template-end-balance-validation',
  templateUrl: './template-end-balance-validation.component.html',
  styleUrls: ['./template-end-balance-validation.component.css']
})
export class TemplateEndBalanceValidationComponent {
  @Input() invalidEndBalanceData: invalidGenericType[] = [];
}
