import { Component, Input, OnInit } from '@angular/core';
import { invalidDuplicateDataType, invalidGenericType } from 'src/app/helpers/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() invalidDuplicateData: invalidDuplicateDataType[] = [];
  @Input() invalidEndBalanceData: invalidGenericType[] = [];
  @Input() caption: string = "";
}
