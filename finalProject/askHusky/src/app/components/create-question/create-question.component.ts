import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user';
import {LoginSignupService} from '../../services/login-signup.service';
import { QuestionService } from './../../services/question.service';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {
  private user: User;
  private tags: any;
  private tagsList: any;
  private question: string;
  private content: any;
  private questionData: any = {
    title: '',
    description: ''
  };
  public Editor = ClassicEditor;

  private baseUri = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private userService: UserService, private questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
    this.questionData.user = this.user;
    console.log('Question creation initialised');

    this.questionService.fetchTags().subscribe(tagList => {
      this.tagsList = tagList;
      console.log(this.tagsList);
    });
  }

  createQuestion(): any {
    const t: any = [];
    for (let i = 0; i < this.tags.length; i++) {
      t[i] = this.tags[i].tagName;
    }

    this.questionData.tags = t;
    this.questionData.userName = this.user.userName;
    this.questionService.createQuestion(this.questionData).subscribe((d) => console.log(d));
    this.router.navigate(['/dashboard']);
  }

}

