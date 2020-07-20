import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IApplication } from 'src/app/models/interfaces/application.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';

export interface ApplicationDialogData {
  action: string;
  application: IApplication;
}

@Component({
  selector: 'app-application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.scss']
})
export class ApplicationDialogComponent implements OnInit {

  action: string;
  application: IApplication;
  formApplication: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ApplicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApplicationDialogData) {
    this.application =  data.application;
    this.action = data.action;
  }
  
  ngOnInit(): void {
    this.formApplication = new FormGroup({
      appCode: new FormControl(this.application.appCode, [Validators.required, Validators.maxLength(100)]),
      name: new FormControl(this.application.name, [Validators.required, Validators.maxLength(100)]),
      description: new FormControl(this.application.description, [Validators.required, Validators.maxLength(250)]),
      appGroup: new FormControl(this.application.appGroup, [Validators.required, Validators.maxLength(100)]),
      appType: new FormControl(this.application.appType, [Validators.required])
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

  doAction() {
    if (this.action == 'Add' || this.action == 'Update') {
      this.application.appCode = this.formApplication.controls['appCode'].value;
      this.application.name = this.formApplication.controls['name'].value;
      this.application.description = this.formApplication.controls['description'].value;
      this.application.appGroup = this.formApplication.controls['appGroup'].value;
      this.application.appType = this.formApplication.controls['appType'].value;
    }
    this.dialogRef.close({event:this.action, data:this.application});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
