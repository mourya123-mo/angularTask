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

const routes: Routes = [{path:'',component:LoginComponent,
 },{path:'dashboard',component:DashboardComponent, children: [ {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent}
, {path:'caliculator',component:CaliculatorComponent}
,{path:'bmi',component:BmiComponent}
,{path:'rectangle',component:RectangleComponent},
{path:'circle',component:CircleComponent},
{path:'data-binding',component:DataBindingComponent},
{path:'directives',component:DirectivesComponent},
{path:"pipes",component:PipesComponent},
{path:"employee",component:EmployeeComponent},
{path:"flipkart",component:FlipkartComponent},
{path:"vehicle",component:VehicleComponent},
{path:"flipkartapi",component:FlipkartApiComponent},
{path:"mail",component:MailComponent},
{path:"Pintrust-Api",component:PintrestComponent},
{path:"weather-Api",component:WeatherApiComponent},
{path:"Blog-Api",component:ApplicationBlogComponent},
{path:"imdb",component:IMDBComponent},
{path:"account",component:AccountsApiComponent},
{path:"user",component:UserProfileComponent}






]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
