import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../classes/question.model';
import {environment} from '../../environments/environment';
import {Answer} from '../classes/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUri = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private selectedQuestion: Question;
  private meetingUserQuestion: Question;

  constructor(private http: HttpClient) { }
  public list(): Observable<Array<Question>> {
    const questions$ = this.http
      .get<Array<Question>>(environment.apiHostUrl + '/questions/');
    return questions$;
  }

  fetchTags() {
    return this.http.get(this.baseUri + '/tags', {headers: this.headers});
  }

  createQuestion(data: any) {
    return this.http.post(this.baseUri + '/questions', data, {headers: this.headers});
  }

  updateAnswer(questionId: string, answer: Answer) {
    return this.http.put(this.baseUri + '/questions/' + questionId + '/answers', answer, {headers: this.headers});
  }
  storeSelectedQuestion(selectedQuestion: Question) {
   this.selectedQuestion = selectedQuestion;
  }
  getSelectedQuestion() {
    return this.selectedQuestion;
  }

  setMeetingUserName( meetingUserQuestion: Question) {
    this.meetingUserQuestion = meetingUserQuestion;
  }

  getMeetingUserName() {
    return this.meetingUserQuestion;
  }


  // insertAnswer(id: string, answer: { answer: string; upvotes: number; userName: any | null | string; downvotes: number; isActive: boolean }) {
  insertAnswer(id: string, answer: Answer) {
    return this.http.post(this.baseUri + '/questions/' + id + '/answers', answer, {headers: this.headers});
  }
}
