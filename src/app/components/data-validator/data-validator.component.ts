import { Component } from '@angular/core';
import { convertTextToArray, parseXML } from '../../helpers/format-data';
import { invalidDuplicateDataType, invalidGenericType, formattedDataType } from '../../helpers/types';

@Component({
  selector: 'app-data-validator',
  templateUrl: './data-validator.component.html',
  styleUrls: ['./data-validator.component.css']
})
export class DataValidatorComponent {

  public isSubmit: boolean = false;
  public message: string = '';
  public isLoading: boolean = false;

  public captionDuplicate: string = 'Invalid Duplicate Data:';
  public captionEndBalance: string = 'Invalid EndBalance Data:';

  public invalidDuplicateData: invalidDuplicateDataType[] = [];
  public invalidDuplicateGroupedMap: any = {};
  public invalidEndBalanceData: invalidGenericType[] = [];

  // constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    //just clear previous data in case user select any other new file
    this.invalidDuplicateData = [];
    this.invalidEndBalanceData = [];
    this.invalidDuplicateGroupedMap = {};
    this.isLoading = true;

    //get file from file control
    const file: File = event.target.files[0];

    //this will take formatted data
    let formattedData: formattedDataType[] | any = null;

    //check if file exist
    if (file) {
      this.message = file.name;
      //read file as text by file reader
      let reader: FileReader = new FileReader();

      reader.readAsText(file);

      reader.onload = (e) => {
        let textFile: string = reader.result as string;

        if (textFile !== "") {
          if (file.type === "text/csv") {
            //convert string file to array format
            formattedData = convertTextToArray(textFile);
            this.isSubmit = true;
          } else if (file.type === "text/xml") {
            formattedData = parseXML(textFile);
            this.isSubmit = true;
          } else {
            //when wrong format is selected
            this.isSubmit = false;
            this.isLoading = false;
            this.message = 'Please use only csv/XML';
          }

          if (formattedData.length > 0) {
            //find duplicate records 
            this.checkDupliacteRecords(formattedData);

            //find records with incorrect end balance
            this.validateEndBanalce(formattedData);

            this.isLoading = false;
          } else {
            //when file exist with header but data is not there
            this.isSubmit = false;
            this.isLoading = false;
            this.message = 'File has only headers but data is not inside';
          }
        } else {
          //when file is empty there
          this.isSubmit = false;
          this.isLoading = false;
          this.message = 'File is empty';
        }
      }
    } else {
      //when no file selected
      this.isSubmit = false;
      this.isLoading = false;
      this.message = 'Please select a file';
    }
  }

  //checking duplicate here
  checkDupliacteRecords(inputArray: formattedDataType[]) {

    //make grouping for duplicate records
    inputArray.forEach((element: formattedDataType) => {
      const { reference, description } = element;
      if (!this.invalidDuplicateGroupedMap[reference]) {
        this.invalidDuplicateGroupedMap[reference] = [{ reference, description }];
      } else {
        this.invalidDuplicateGroupedMap[reference].push({ reference, description });
      }
    });

    //convert grouped object to array for easy itration
    for (let [key, val] of Object.entries(this.invalidDuplicateGroupedMap)) {
      if (Array.isArray(val) && val.length > 1) {
        this.invalidDuplicateData.push({ reference: key, items: val });
      }

    }

  }

  //checking end balance validation here
  validateEndBanalce(inputArray: formattedDataType[]) {

    inputArray.forEach((item: formattedDataType) => {
      const { reference, description, startBalance, mutation, endBalance } = item;
      if ((Number(startBalance) + Number(mutation)).toFixed(2) !== Number(endBalance).toFixed(2)) {
        this.invalidEndBalanceData.push({ reference, description });
      }
    });
  }
}


