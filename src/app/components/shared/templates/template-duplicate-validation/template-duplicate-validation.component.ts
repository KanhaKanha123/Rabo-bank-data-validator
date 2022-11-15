import { Component, Input } from '@angular/core';
import { invalidDuplicateDataType } from '../../../../helpers/types';

@Component({
  selector: 'app-template-duplicate-validation',
  templateUrl: './template-duplicate-validation.component.html',
  styleUrls: ['./template-duplicate-validation.component.css']
})
export class TemplateDuplicateValidationComponent {
  @Input() invalidDuplicateData: invalidDuplicateDataType[] = [];
}
