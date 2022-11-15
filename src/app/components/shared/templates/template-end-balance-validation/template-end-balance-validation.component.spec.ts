import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expectedInvalidEndAmountData } from './fixture/test-data';

import { TemplateEndBalanceValidationComponent } from './template-end-balance-validation.component';

describe('TemplateEndBalanceValidationComponent', () => {
  let component: TemplateEndBalanceValidationComponent;
  let fixture: ComponentFixture<TemplateEndBalanceValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateEndBalanceValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateEndBalanceValidationComponent);
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

  it('should recoeve correct invalidEndBalanceData props and render on UI', () => {
    component.invalidEndBalanceData = expectedInvalidEndAmountData;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.active-row td:nth-child(1)')[0]?.textContent).toContain('156109');
    expect(compiled.querySelectorAll('.active-row td:nth-child(2)')[0]?.textContent).toContain('Flowers from Erik de Vries');
  });
});
