import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AboutUsComponent } from './components/about-us/about-us.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {register} from 'ts-node';
import {AddProjectComponent} from './components/add-project/add-project.component';
import {AddServiceComponent} from './components/add-service/add-service.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {AuthGuard} from './services/auth.guard.service';
import {AllCategoriesComponent} from './components/all-categories/all-categories.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'all-categories', component: AllCategoriesComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: 'add-project', component: AddProjectComponent, canActivate: [AuthGuard]},
  {path: 'add-service', component: AddServiceComponent, canActivate: [AuthGuard]},
  {path: 'projects/:id', component: AddProjectComponent, canActivate: [AuthGuard]},
  {path: 'all-projects', component: AllProjectsComponent, canActivate: [AuthGuard]},
  {path: 'all-services', component: AllServicesComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
