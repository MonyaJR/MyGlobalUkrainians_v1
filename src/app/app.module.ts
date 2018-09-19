import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthGuard } from './services/auth.guard.service';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectsService } from './services/projects.service';
import { ServicesService} from './services/services.service';
import { IdService } from './services/id.service';
import { AuthService } from './services/auth.service';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import {CategoriesService} from './services/categories.service';
import {AngularFireDatabase} from 'angularfire2/database';
import { CategoryComponent } from './components/category/category.component';
import {DataServiceService} from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AddProjectComponent,
    AddServiceComponent,
    AllProjectsComponent,
    AllServicesComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    RegisterComponent,
    HomepageComponent,
    CustomDatePipe,
    AllCategoriesComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebse),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ProjectsService, IdService, AuthService, ServicesService, AuthGuard, CategoriesService, AngularFireDatabase, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
