import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { reducers } from '.';
import { ApplicationEffects } from './effects/application.effects';
import { AppServiceEffects } from './effects/appservice.effects';
import { SolrQueryEffects } from './effects/solr-query.effects';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ApplicationEffects, SolrQueryEffects, AppServiceEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports: [StoreModule]
})
export class StorageModule { }
