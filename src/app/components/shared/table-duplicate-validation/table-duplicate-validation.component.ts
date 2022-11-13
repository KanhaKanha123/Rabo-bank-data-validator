import { Component, Input } from '@angular/core';
import { invalidDuplicateDataType } from '../../../helpers/types';

@Component({
  selector: 'app-table-duplicate-validation',
  templateUrl: './table-duplicate-validation.component.html',
  styleUrls: ['./table-duplicate-validation.component.css']
})
export class TableDuplicateValidationComponent {
  @Input() invalidDuplicateData: invalidDuplicateDataType[] = [];
}
