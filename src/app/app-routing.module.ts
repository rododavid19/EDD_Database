import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import {AddComponent} from  './add/add.component';
import {HistoryComponent} from './history/history.component';

const routes: Routes = [
  {path: 'search', component: SearchResultComponent},
  {path: 'add', component: AddComponent},
  {path: 'history', component: HistoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

