import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { DataValidatorComponent } from './data-validator.component';
import {testData,expectedDuplicateData,expectedInvalidEndAmountData} from './fixture/test-data';

describe('DataValidatorComponent', () => {
  let component: DataValidatorComponent;
  let fixture: ComponentFixture<DataValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should detect file input change and set uploadedFile  model', () => {
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'test-file.pdf'))

    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;

    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));

    fixture.detectChanges();

    expect(component.message).toBeTruthy()
    expect(component.message).toBe('test-file.pdf')
    
});

it('file change event should arrive in handler', () => {
    const element = fixture.nativeElement;
    const input = element.querySelector('.file-input');
    spyOn(component, 'onFileSelected');
    input.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.onFileSelected).toHaveBeenCalled();
});

it('checkDupliacteRecords should return correct data', () => {
  const element = fixture.nativeElement;
  component.checkDupliacteRecords(testData);
  fixture.detectChanges();
  expect(component.invalidDuplicateData).toEqual(expectedDuplicateData)
});

it('validateEndBanalce should return correct data', () => {
  const element = fixture.nativeElement;
  component.validateEndBanalce(testData);
  fixture.detectChanges();
  expect(component.invalidEndBalanceData).toEqual(expectedInvalidEndAmountData)
});

it('In case of no duplicate found there should be correct message', () => {
  const element = fixture.nativeElement;
  component.invalidDuplicateData=[];
  component.isSubmit= true;
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelectorAll('.message-no-duplicate')[0]?.textContent).toContain('No Duplicate Found');
});

it('In case of no end ba;ance wrong found there should be correct message', () => {
  const element = fixture.nativeElement;
  component.invalidEndBalanceData=[];
  component.isSubmit= true;
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelectorAll('.message-no-end-balance')[0]?.textContent).toContain('End blance for all record is correct');
});
});
