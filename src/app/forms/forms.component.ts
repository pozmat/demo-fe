import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  data: any[];  
  form: FormGroup;  
  response: any;

  url = 'http://35.241.236.231:8080/api/v1/calculation'

  constructor( private formBuilder: FormBuilder, private http: HttpClient, private detector: ChangeDetectorRef) { 

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.form = this.formBuilder.group({
      user: new FormControl(null),
      total: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),
      values: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9\n]*$")
      ]),
    });
  }

  onSubmit() {
    let incomingData = this.form.value;  
    let object: any;
    
    object = {
      user: incomingData.user,
      total: parseInt(incomingData.total),
      values: incomingData.values.trim().split(/[,\n]/).map(Number)
    }

    this.postData(<JSON>object);
  }

  postData(requestJson: JSON){
    console.log('sent a POST')
    this.http.post(this.url, requestJson).toPromise().then((data: any) => {
      console.warn(data);

      this.response = data.data;
      this.detector.markForCheck();
      console.warn(JSON.stringify(data))
    });

  }

}
