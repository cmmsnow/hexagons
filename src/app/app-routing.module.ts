import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from './board/board.component';
import {PracticeComponent} from './practice/practice.component';

const routes: Routes = [
  {path: '', component: BoardComponent},
  {path: 'practice', component: PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
