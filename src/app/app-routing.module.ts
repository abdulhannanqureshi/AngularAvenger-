import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';
// for authguard 
import { AngularAuthGuard } from './angular-auth.guard';

const routes: Routes = [
	{ path:'' ,component: HomeComponent, canActivate:[AngularAuthGuard] },
	{ path:'login', component: LoginComponent },
	{ path:'signin', component: SignupComponent },
	{ path:'getdata', component: GetDataComponent },
	{ path:'postdata', component: PostDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 