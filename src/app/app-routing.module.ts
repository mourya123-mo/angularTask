import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CaliculatorComponent } from './caliculator/caliculator.component';
import { BmiComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { MailComponent } from './mail/mail.component';
import { PintrestComponent } from './pintrest/pintrest.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { ApplicationBlogComponent } from './application-blog/application-blog.component';
import { IMDBComponent } from './imdb/imdb.component';
import { AccountsApiComponent } from './accounts-api/accounts-api.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateVehicleComponentComponent } from './create-vehicle-component/create-vehicle-component.component';
import { StudentapiComponent } from './studentapi/studentapi.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UsersComponent } from './users/users.component';
import { StudentformTaskComponent } from './studentform-task/studentform-task.component';
import { AutenticationGuard } from './autentication.guard';

const routes: Routes = [{path:'',component:LoginComponent,
 },{path:'dashboard',canActivate:[AutenticationGuard],component:DashboardComponent, children: [ {path:'home',component:HomeComponent},
  {path:'welcome',canActivate:[AutenticationGuard],component:WelcomeComponent}
, {path:'caliculator', canActivate:[AutenticationGuard],component:CaliculatorComponent}
,{path:'bmi', canActivate:[AutenticationGuard],component:BmiComponent}
,{path:'rectangle', canActivate:[AutenticationGuard],component:RectangleComponent},
{path:'circle', canActivate:[AutenticationGuard],component:CircleComponent},
{path:'data-binding', canActivate:[AutenticationGuard],component:DataBindingComponent},
{path:'directives', canActivate:[AutenticationGuard],component:DirectivesComponent},
{path:"pipes", canActivate:[AutenticationGuard],component:PipesComponent},
{path:"employee", canActivate:[AutenticationGuard],component:EmployeeComponent},
{path:"flipkart", canActivate:[AutenticationGuard],component:FlipkartComponent},
{path:"vehicle", canActivate:[AutenticationGuard],component:VehicleComponent},
{path:"flipkartapi", canActivate:[AutenticationGuard],component:FlipkartApiComponent},
{path:"mail", canActivate:[AutenticationGuard],component:MailComponent},
{path:"Pintrust-Api", canActivate:[AutenticationGuard],component:PintrestComponent},
{path:"weather-Api", canActivate:[AutenticationGuard],component:WeatherApiComponent},
{path:"Blog-Api", canActivate:[AutenticationGuard],component:ApplicationBlogComponent},
{path:"imdb", canActivate:[AutenticationGuard],component:IMDBComponent},
{path:"account", canActivate:[AutenticationGuard],component:AccountsApiComponent},
{path:"user", canActivate:[AutenticationGuard],component:UserProfileComponent},
{path:"createvehicle", canActivate:[AutenticationGuard],component:CreateVehicleComponentComponent},
{path:"student", canActivate:[AutenticationGuard],component:StudentapiComponent},
{path:"createstudent", canActivate:[AutenticationGuard],component:CreateStudentComponent},
{path:"users", canActivate:[AutenticationGuard],component:UsersComponent},
{path:"studentFormTask", canActivate:[AutenticationGuard],component:StudentformTaskComponent}








]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
