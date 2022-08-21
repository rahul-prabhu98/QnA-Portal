import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginSignupService} from './services/login-signup.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventRequestComponent } from './components/event-request/event-request.component';
import { ArchwizardModule } from 'angular-archwizard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import {HttpInterceptor} from '@angular/common/http';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { EventViewRequestsComponent } from './components/event-view-requests/event-view-requests.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {JwPaginationComponent} from 'jw-angular-pagination';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsBoardComponent } from './components/skills-board/skills-board.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomepageComponent,
    CreateQuestionComponent,
    ProfileComponent,
    EventRequestComponent,
    QuestionsListComponent,
    EventViewRequestsComponent,
    NavbarComponent,
    QuestionsListComponent,
    JwPaginationComponent,
    QuestionDetailComponent,
    SkillsBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ArchwizardModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    TagInputModule,
    BrowserAnimationsModule,
    CKEditorModule,
    FontAwesomeModule
  ],
  providers: [LoginSignupService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
