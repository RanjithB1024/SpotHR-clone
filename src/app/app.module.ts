import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { ResetpswComponent } from './resetpsw/resetpsw.component';
import { OTPComponent } from './otp/otp.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MygoalsComponent } from './mygoals/mygoals.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormsModule,
  
} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { SideComponent } from './side/side.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SelfAssessementComponent } from './self-assessement/self-assessement.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ManagerReviewComponent } from './manager-review/manager-review.component';
import { SampleComponent } from './sample/sample.component';
import { ResignationComponent } from './resignation/resignation.component';
import { ViewgoalsComponent } from './viewgoals/viewgoals.component';

import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.centerCenter,
  bgsSize: 100,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,

    ResetpswComponent,
    OTPComponent,
    MyprofileComponent,
    MygoalsComponent,
    DashboardComponent,
    ChartsComponent,
    SideComponent,
    SignupComponent,
    HomeComponent,
    SelfAssessementComponent,
    ManagerReviewComponent,
    SampleComponent,
    ResignationComponent,
    ViewgoalsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule, NgApexchartsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
