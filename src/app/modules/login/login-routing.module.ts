import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {SelectComponent} from './select/select.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'select', component: SelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
