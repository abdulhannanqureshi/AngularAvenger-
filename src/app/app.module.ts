import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// for all bootstrape design module -- 
// bas ye module add karo to sab run hojaege baki ko karne ki jarurat nhi hai 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// for reactive forms 
import { ReactiveFormsModule } from '@angular/forms';
import { GetDataComponent } from './get-data/get-data.component';
// for fetching data from api and using by httpclientmodule 
import { HttpClientModule } from '@angular/common/http';
import { PostDataComponent } from './post-data/post-data.component';
// for authguard use  and put in providers
import { AngularAuthGuard } from './angular-auth.guard';
// for add another module file authmodule
import { AuthmoduleModule } from './core/authmodule/authmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    GetDataComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthmoduleModule
  ],
  providers: [AngularAuthGuard], // authguard
  bootstrap: [AppComponent] 
})
export class AppModule { } 
