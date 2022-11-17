import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { invalidDuplicateDataType, invalidGenericType } from 'src/app/helpers/types';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @ViewChild('pdfTable') pdfTable!: ElementRef;

  @Input() invalidDuplicateData: invalidDuplicateDataType[] = [];
  @Input() invalidEndBalanceData: invalidGenericType[] = [];
  @Input() caption: string = "";

  public exportToPDF() {
    html2canvas(this.pdfTable.nativeElement).then(canvas => {
      let contentUrl = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      let pdfWidth: number = Number(210);
      let height = canvas.height * pdfWidth / canvas.width;
      pdf.addImage(contentUrl, 'PNG', 0, 0, pdfWidth, height);
      pdf.save('InvalidData.pdf')
    });
  };
}
