import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { SolrQueryListComponent } from './components/solr-query-list/solr-query-list.component';
import { AppServiceListComponent } from './components/appservice-list/appservice-list.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './store/effects/application.effects';
import { AppServiceEffects } from './store/effects/appservice.effects';
import { SolrQueryEffects } from './store/effects/solr-query.effects';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationDialogComponent } from './dialogs/application-dialog/application-dialog.component';
import { AppServiceDialogComponent } from './dialogs/appservice-dialog/appservice-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AppServiceListComponent,
    ApplicationListComponent,
    ApplicationDialogComponent,
    AppServiceDialogComponent,
    SolrQueryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ApplicationEffects, SolrQueryEffects, AppServiceEffects]),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
