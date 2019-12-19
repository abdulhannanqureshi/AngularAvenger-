import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsigninComponent } from './adminsignin/adminsignin.component';

const authrouting: Routes = [
	{ path:'adminsignin', component:AdminsigninComponent }
];
 
// const routes: Routes = [
// 	{ path:'' ,component: HomeComponent, canActivate:[AngularAuthGuard] },
// 	{ path:'login', component: LoginComponent },
// 	{ path:'signin', component: SignupComponent },
// 	{ path:'getdata', component: GetDataComponent },
// 	{ path:'postdata', component: PostDataComponent }
// ];
    

@NgModule({
  imports: [RouterModule.forChild(authrouting)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


