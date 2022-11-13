import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expectedInvalidEndAmountData } from './fixture/test-data';

import { TableEndBalanceValidationComponent } from './table-end-balance-validation.component';

describe('TableEndBalanceValidationComponent', () => {
  let component: TableEndBalanceValidationComponent;
  let fixture: ComponentFixture<TableEndBalanceValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEndBalanceValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEndBalanceValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recoeve correct props', () => {
    component.invalidEndBalanceData=expectedInvalidEndAmountData;
    fixture.detectChanges();
    expect( component.invalidEndBalanceData).toEqual(expectedInvalidEndAmountData);
  });
});
