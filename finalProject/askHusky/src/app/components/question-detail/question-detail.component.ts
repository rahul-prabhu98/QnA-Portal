import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../classes/question.model';
import {QuestionService} from '../../services/question.service';
import {RouterModule} from '@angular/router';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons/faArrowCircleUp';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons/faArrowCircleDown';
import {Answer} from '../../classes/answer.model';
import {Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {HttpHeaders} from '@angular/common/http';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

private answer = {
    id: '0',
    userName: '',
    answer: '',
    upvotes: 0,
    downvotes: 0,
    isActive: true
  };
  private selectedQuestion: Question;
  constructor(private router: RouterModule, private questionService: QuestionService, private userService: UserService) { }
  faArrowCircleUp = faArrowCircleUp;
  faArrowCircleDown = faArrowCircleDown;
  public Editor = ClassicEditor;
  private currentUser;
  private answerData: string;
  // @Input() selectedQuestion: Question;
  ngOnInit() {
    this.currentUser = this.userService.getterUser();
    this.selectedQuestion = this.questionService.getSelectedQuestion();
  }

  upvote(answer: Answer) {
    console.log('upvote!');
    let newScore: number = answer.upvotes;
    newScore++;
    answer.upvotes = newScore;
    this.questionService.updateAnswer(this.selectedQuestion.id, answer).subscribe((d) => console.log(d));;
    // for (ans of this.selectedQuestion.answers){
    //
    // }
  }

  downvote(answer: Answer) {
    console.log('downvote!');
    let newScore: number = answer.downvotes;
    newScore++;
    answer.downvotes = newScore;
    this.questionService.updateAnswer(this.selectedQuestion.id, answer).subscribe((d) => console.log(d));
  }

  createAnswer() {
    // /questions/:questionId/answers
    // {
    //   "dateCreated" : ISODate("2019-12-10T08:16:21.844Z"),
    //   "_id" : ObjectId("5def5603cc72275348739d83"),
    //   "userName" : "DwightSchrute",
    //   "answer" : "MongoDB has a better logo, it's faster. It allows nested documents.",
    //   "upvotes" : 1,
    //   "downvotes" : 2,
    //   "isActive" : true
    // }
    // const answer = {
    //   id: '0',
      this.answer.userName = this.currentUser.userName,
      // answer: this.answerData,
      // upvotes: 0,
      // downvotes: 0,
      // isActive: true
    // };
    this.questionService.insertAnswer(this.selectedQuestion.id, this.answer).subscribe((d) => console.log(d));
  }
}
