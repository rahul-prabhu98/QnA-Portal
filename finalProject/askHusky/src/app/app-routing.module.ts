import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomepageComponent} from  './components/homepage/homepage.component';
import {ProfileComponent} from './components/profile/profile.component';
import { EventRequestComponent } from './components/event-request/event-request.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CreateQuestionComponent} from './components/create-question/create-question.component';
import { EventViewRequestsComponent } from './components/event-view-requests/event-view-requests.component';
import {QuestionDetailComponent} from './components/question-detail/question-detail.component';
import {QuestionsListComponent} from './components/questions-list/questions-list.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'changePassword', component: ProfileComponent},
      {path: 'requests/add', component: EventRequestComponent},
      {path: 'questions/add', component: CreateQuestionComponent},
      {path: 'requests/view', component: EventViewRequestsComponent},
      {path : 'questions/details', component : QuestionDetailComponent},
      {path : 'questions/list', component : QuestionsListComponent},
      {path : '', redirectTo: 'questions/list', pathMatch: 'full'}
    ]
  },
  {path : '**', component : HomepageComponent} ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
