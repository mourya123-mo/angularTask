import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CaliculatorComponent } from './caliculator/caliculator.component';
import { BmiComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
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
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { Sibiling1Component } from './sibiling1/sibiling1.component';
import { Sibiling2Component } from './sibiling2/sibiling2.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RatingsComponent } from './ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    WelcomeComponent,
    CaliculatorComponent,
    BmiComponent,
    RectangleComponent,
    CircleComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    LoginComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    FlipkartApiComponent,
    MailComponent,
    PintrestComponent,
    WeatherApiComponent,
    ApplicationBlogComponent,
    IMDBComponent,
    AccountsApiComponent,
    UserProfileComponent,
    CreateVehicleComponentComponent,
    StudentapiComponent,
    CreateStudentComponent,
    UsersComponent,
    StudentformTaskComponent,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    CreateEmployeeComponent,
    Sibiling1Component,
    Sibiling2Component,
    ChildComponent,
    ParentComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
