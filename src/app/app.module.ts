import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Route, RouterModule, ROUTES} from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ResultComponent } from './result/result.component';
import { AddComponent } from './add/add.component';
import {HistoryComponent} from './history/history.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    ResultComponent,
    AddComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
