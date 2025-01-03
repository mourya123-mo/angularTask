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

const routes: Routes = [{path:'',component:DashboardComponent,children:[{path:'home',component:HomeComponent},{path:'welcome',component:WelcomeComponent}
 , {path:'caliculator',component:CaliculatorComponent},{path:'bmi',component:BmiComponent},{path:'rectangle',component:RectangleComponent},{path:'circle',component:CircleComponent},
 {path:'data-binding',component:DataBindingComponent},{path:'directives',component:DirectivesComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
