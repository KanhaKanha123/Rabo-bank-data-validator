import { Component, Input } from '@angular/core';
import { invalidDuplicateType } from '../../../helpers/types';

@Component({
  selector: 'app-table-end-balance-validation',
  templateUrl: './table-end-balance-validation.component.html',
  styleUrls: ['./table-end-balance-validation.component.css']
})
export class TableEndBalanceValidationComponent {
  @Input() invalidEndBalanceData: invalidDuplicateType[] = [];
}
