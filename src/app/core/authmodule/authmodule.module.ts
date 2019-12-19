import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsigninComponent } from '../adminsignin/adminsignin.component';
import { AdminsignupComponent } from '../adminsignup/adminsignup.component';
import { AuthRoutingModule } from '../authrouting.module';


@NgModule({
  declarations: [
  	AdminsigninComponent,
    AdminsignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthmoduleModule { }
