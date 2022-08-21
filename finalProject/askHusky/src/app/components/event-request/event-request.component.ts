import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../../services/event-service.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../classes/user';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../classes/question.model';

@Component({
  selector: 'app-event-request',
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.scss']
})


export class EventRequestComponent implements OnInit {
  private user: User;
  // tslint:disable-next-line:max-line-length
  constructor(private eventServiceService: EventServiceService, private userService: UserService, private questionService: QuestionService, private router: Router) { }
  selectedQuestion: Question;
  ngOnInit() {
    this.user = this.userService.getterUser();
    this.selectedQuestion = this.questionService.getMeetingUserName();
    console.log('this.selectedQuestion.userName');
    console.log(this.selectedQuestion.userName);
  }

  submitRequestEvent(form) {
    // tslint:disable-next-line:max-line-length
    console.log('inside submitReqEvt');
    // tslint:disable-next-line:max-line-length
    const newVar = {...form.value, organizer: this.user.userName, attendees: this.selectedQuestion.userName , requestStatus: 'INITIATED', questionID: this.selectedQuestion.id };
    // tslint:disable-next-line:prefer-const one-variable-per-declaration
    newVar.date = new Date(newVar.date.year, newVar.date.month, newVar.date.day);
    newVar.time = ((newVar.time.hour + ':' + newVar.time.minute + ':' + '00') );
    this.eventServiceService.createRequest(newVar).subscribe(
      data => {console.log(data); alert('Meeting Request Sent!'); },
      error => console.log(error));
    form.reset();
    this.router.navigate(['/dashboard']);
  }

}
