import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expectedDuplicateData, expectedInvalidEndAmountData } from './fixture/test-data';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recoeve correct invalidDuplicateData props', () => {

    component.invalidDuplicateData = expectedDuplicateData;
    fixture.detectChanges();
    expect(component.invalidDuplicateData).toEqual(expectedDuplicateData);
  });

  it('should recoeve correct invalidEndBalanceData props', () => {
    component.invalidEndBalanceData = expectedInvalidEndAmountData;
    fixture.detectChanges();
    expect(component.invalidEndBalanceData).toEqual(expectedInvalidEndAmountData);
  });

  it('should recoeve correct caption props', () => {
    component.caption = "table is here";
    fixture.detectChanges();
    expect(component.caption).toEqual('table is here');
  });

  it('should recoeve correct caption props and render on UI', () => {
    component.caption = "table is here";
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('table is here');
  });

});
