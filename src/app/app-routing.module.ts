import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { MygoalsComponent } from './mygoals/mygoals.component';
import { ResetpswComponent } from './resetpsw/resetpsw.component';
import { OTPComponent } from './otp/otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { SideComponent } from './side/side.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SelfAssessementComponent } from './self-assessement/self-assessement.component';
import { ManagerReviewComponent } from './manager-review/manager-review.component';
import { SampleComponent } from './sample/sample.component';
import { ResignationComponent } from './resignation/resignation.component';
import { ViewgoalsComponent } from './viewgoals/viewgoals.component';


const routes: Routes = [
  {path:'Sidenav',component:SidenavComponent},
{path:'profile',component:MyprofileComponent},
{path:'Goals',component:MygoalsComponent},
{path:'reset',component:ResetpswComponent},
{path:'otp',component:OTPComponent},
{path:'dashboard',component:DashboardComponent},
{path:'charts',component:ChartsComponent},
{path:'side',component:SideComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'self',component:SelfAssessementComponent},
{path:'manager',component:ManagerReviewComponent},
{path:'sample',component:SampleComponent},
{path:'Resignation',component:ResignationComponent},
{path:'view',component:ViewgoalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule {
}

