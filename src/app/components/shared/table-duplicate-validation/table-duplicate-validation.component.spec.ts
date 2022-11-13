import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expectedDuplicateData } from './fixture/test-data';

import { TableDuplicateValidationComponent } from './table-duplicate-validation.component';

describe('TableDuplicateValidationComponent', () => {
  let component: TableDuplicateValidationComponent;
  let fixture: ComponentFixture<TableDuplicateValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDuplicateValidationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableDuplicateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recoeve correct props', () => {
    
    component.invalidDuplicateData = expectedDuplicateData;
    fixture.detectChanges();
    expect(component.invalidDuplicateData).toEqual(expectedDuplicateData);
  });
});
