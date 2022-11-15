import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expectedDuplicateData } from './fixture/test-data';

import { TemplateDuplicateValidationComponent } from './template-duplicate-validation.component';

describe('TemplateDuplicateValidationComponent', () => {
  let component: TemplateDuplicateValidationComponent;
  let fixture: ComponentFixture<TemplateDuplicateValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDuplicateValidationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TemplateDuplicateValidationComponent);
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

  it('should recoeve correct invalidDuplicateData props and render on UI', () => {
    component.invalidDuplicateData = expectedDuplicateData;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.group-title')[0]?.textContent).toContain('156109');
    expect(compiled.querySelectorAll('.active-row td:nth-child(2)')[0]?.textContent).toContain('Flowers from Erik de Vries');
    expect(compiled.querySelectorAll('.active-row td:nth-child(2)')[1]?.textContent).toContain('Flowers from Erik de Vries1');
  });
});
