import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedCommonModule } from '../shared-common.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedCommonModule
  ],
})
export class AuthModule { }
