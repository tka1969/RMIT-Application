import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { GlobalState } from 'src/app/store/state/global.state';
import { IApplication } from 'src/app/models/interfaces/application.interface';
import * as selectorApplication from '../../store/selectors/application.selectors';
import { Router } from '@angular/router';
import { ListApplicationAction, AddApplicationAction, UpdateApplicationAction, DeleteApplicationAction } from 'src/app/store/actions/application.actions';
import { ApplicationDialogComponent } from 'src/app/dialogs/application-dialog/application-dialog.component';


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  displayedColumns: string[] = ['appCode', 'name', 'description', 'appGroup', 'appType', 'appservices', 'action'];
  dataSource: MatTableDataSource<IApplication>;
  listLoaded$: Observable<boolean>;
  listLoading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private router: Router, public dialog: MatDialog, public store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectorApplication.selectorListApplication)).subscribe(applications => this.initializeData(applications));
    this.listLoaded$ = this.store.pipe(select(selectorApplication.selectorListApplicationLoaded));
    this.listLoading$ = this.store.pipe(select(selectorApplication.selectorListApplicationLoading));
    this.error$ = this.store.pipe(select(selectorApplication.selectorListApplicationFailed));

    this.store.pipe(select(selectorApplication.selectorAddApplication)).subscribe(application => this.applicationAdded(application));

    this.loadApplications();
  }

  private loadApplications(): void {
    this.store.dispatch(new ListApplicationAction());
  }

  private initializeData(applications: IApplication[]): void {
    this.dataSource = new MatTableDataSource(applications);
  }

  private applicationAdded(application: IApplication): void {
    this.dataSource = new MatTableDataSource(this.dataSource.data.concat(application));
  }

  public refresh(): void { 
    this.loadApplications();
  }  

  public retry(): void { 
    this.loadApplications();
  }  

  openAppService(appCode) {
    this.router.navigate(['/appservice-list/', appCode]);
  }

  openSearch() {
    this.router.navigateByUrl('/solr-query-list');
  }

  openDialog(action, application) {
    const dialogRef = this.dialog.open(ApplicationDialogComponent, {
      width: '450px',
      disableClose: true,
      data: { action: action, application: { ...application } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add'){
        this.addRowData(result.data);
      } else if(result.event == 'Update'){
        this.updateRowData(result.data);
      } else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(application: IApplication) {
    this.store.dispatch(new AddApplicationAction(application));
  }

  updateRowData(application: IApplication) {
    
    this.dataSource = new MatTableDataSource(
      this.dataSource.data.filter((value, key)=>{ 
        if (value.appCode == application.appCode) {
            value.name = application.name;
            value.description = application.description;
            value.appGroup = application.appGroup;
            value.appType = application.appType;
        }
        return true;
      })
    );
    this.store.dispatch(new UpdateApplicationAction(application));
    this.loadApplications();
  }
  
  deleteRowData(application: IApplication) {
    this.store.dispatch(new DeleteApplicationAction({appCode: application.appCode}));

    this.dataSource = new MatTableDataSource(this.dataSource.data.filter((value)=>{ return value.appCode != application.appCode; }));
  }
}
