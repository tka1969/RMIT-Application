import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { AppServiceListComponent } from './components/appservice-list/appservice-list.component';
import { SolrQueryListComponent } from './components/solr-query-list/solr-query-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'application-list', pathMatch: 'full' },
  { path: 'application-list', component: ApplicationListComponent },
  { path: 'appservice-list/:appCode', component: AppServiceListComponent },
  { path: 'solr-query-list', component: SolrQueryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
