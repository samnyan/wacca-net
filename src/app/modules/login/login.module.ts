import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    LoginComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
