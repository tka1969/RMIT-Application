import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IAppService } from 'src/app/models/interfaces/appservice.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';

export interface AppServiceDialogData {
  action: string;
  appservice: IAppService;
}

@Component({
  selector: 'app-appservice-dialog',
  templateUrl: './appservice-dialog.component.html',
  styleUrls: ['./appservice-dialog.component.scss']
})
export class AppServiceDialogComponent implements OnInit {

  action: string;
  appservice: IAppService;
  formApplication: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AppServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppServiceDialogData) {
    this.appservice =  data.appservice;
    this.action = data.action;
  }
  
  ngOnInit(): void {
    this.formApplication  = new FormGroup({
      appCode: new FormControl(this.appservice.appCode, [Validators.required, Validators.maxLength(100)]),
      name: new FormControl(this.appservice.name, [Validators.required, Validators.maxLength(100)]),
      description: new FormControl(this.appservice.description, [Validators.required, Validators.maxLength(250)]),
      serviceCode: new FormControl(this.appservice.serviceCode, [Validators.required, Validators.maxLength(100)]),
      subType: new FormControl(this.appservice.subType, [Validators.required]),
      type: new FormControl(this.appservice.type, [Validators.required])
    });
  
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
          this.closeDialog();
      }
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formApplication.controls[controlName].hasError(errorName);
  }

  public isDisabled = () => {
    if ('Delete' == this.action)
      return false;
    return !this.formApplication.valid;
  }

  doAction(){
    if (this.action == 'Add' || this.action == 'Update') {
      this.appservice.appCode = this.formApplication.controls['appCode'].value;
      this.appservice.name = this.formApplication.controls['name'].value;
      this.appservice.description = this.formApplication.controls['description'].value;
      this.appservice.serviceCode = this.formApplication.controls['serviceCode'].value;
      this.appservice.subType = this.formApplication.controls['subType'].value;
      this.appservice.type = this.formApplication.controls['type'].value;
    }    
    this.dialogRef.close({event:this.action, data:this.appservice});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
