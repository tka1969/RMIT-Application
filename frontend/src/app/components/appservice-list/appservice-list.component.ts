import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { GlobalState } from 'src/app/store/state/global.state';
import { IAppService } from 'src/app/models/interfaces/appservice.interface';
import * as selectorAppService from '../../store/selectors/appservice.selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { ListAppServiceAction, AddAppServiceAction, UpdateAppServiceAction, DeleteAppServiceAction } from 'src/app/store/actions/appservice.actions';
import { AppServiceDialogComponent } from 'src/app/dialogs/appservice-dialog/appservice-dialog.component';


@Component({
  selector: 'app-appservice-list',
  templateUrl: './appservice-list.component.html',
  styleUrls: ['./appservice-list.component.scss']
})
export class AppServiceListComponent implements OnInit {

  displayedColumns: string[] = ['appCode', 'name', 'description', 'serviceCode', 'type', 'subType', 'action'];
  dataSource: MatTableDataSource<IAppService>;
  listLoaded$: Observable<boolean>;
  listLoading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, public store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectorAppService.selectorListAppService)).subscribe(appservices => this.initializeData(appservices));
    this.listLoaded$ = this.store.pipe(select(selectorAppService.selectorListAppServiceLoaded));
    this.listLoading$ = this.store.pipe(select(selectorAppService.selectorListAppServiceLoading));
    this.error$ = this.store.pipe(select(selectorAppService.selectorListAppServiceFailed));

    this.store.pipe(select(selectorAppService.selectorAddAppService)).subscribe(application => this.appserviceAdded(application));

    this.loadAppServices();
  }

  private loadAppServices(): void {
    this.store.dispatch(new ListAppServiceAction(this.route.snapshot.params.appCode));
  }

  private initializeData(appservice: IAppService[]): void {
    this.dataSource = new MatTableDataSource(appservice);
  }

  private appserviceAdded(appservice: IAppService) {
    this.dataSource = new MatTableDataSource(this.dataSource.data.concat(appservice));
  }

  public refresh(): void { 
    this.loadAppServices();
  }  

  public retry(): void { 
    this.loadAppServices();
  }  

  goApplication(): void {
    this.router.navigateByUrl('/application-list');
  }

  openSearch() {
    this.router.navigateByUrl('/solr-query-list');
  }
    
  openDialog(action, appservice) {
    appservice.appCode = this.route.snapshot.params.appCode;

    const dialogRef = this.dialog.open(AppServiceDialogComponent, {
      width: '450px',
      disableClose: true,
      data: { action: action, appservice: { ...appservice } }
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

  addRowData(appservice: IAppService) {
    this.store.dispatch(new AddAppServiceAction(appservice));
  }

  updateRowData(appservice: IAppService) {
    this.dataSource = new MatTableDataSource(
      this.dataSource.data.filter((value, key)=>{ 
        if (value.serviceCode == appservice.serviceCode) {
            value.appCode = appservice.appCode;
            value.name = appservice.name;
            value.description = appservice.description;
            value.type = appservice.type;
            value.subType = appservice.subType;
        }
        return true;
      })
    );
    this.store.dispatch(new UpdateAppServiceAction(appservice));
    this.loadAppServices();
  }
  
  deleteRowData(appservice: IAppService) {
    this.store.dispatch(new DeleteAppServiceAction({serviceCode: appservice.serviceCode}));

    this.dataSource = new MatTableDataSource(this.dataSource.data.filter((value)=>{ return value.serviceCode != appservice.serviceCode; }));
  }
}
