import { Component, OnInit } from '@angular/core';
import {Question} from '../../classes/question.model';
import {QuestionService} from '../../services/question.service';
import {Answer} from '../../classes/answer.model';
import {Router, RouterModule} from '@angular/router';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {User} from '../../classes/user';


@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions: Array<Question>;
  selectedQuestion: Question;
  topAnswer: Answer;
  faCalendarAlt = faCalendarAlt;

  // items = [];
  pageOfItems: Array<Question>;
  constructor(private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.list().subscribe(questions => {
      this.questions = questions;
      console.log(questions);
      this.getTopAnswer();
    });

  }

  getTopAnswer() {
    for (let i = 0; i < this.questions.length; i++) {
    // for (const question of this.questions) {
      let topCount: number;
      topCount = 0;
      let topAnswer: Answer = null;
      for (const answer of this.questions[i].answers) {
        const cumulativeVote = answer.upvotes - answer.downvotes;
        if (cumulativeVote > topCount) {
          topCount = cumulativeVote;
          topAnswer = answer;
        }
      }
      console.log('top answer:');
      // console.log(topAnswer);
      if (topAnswer != null) {
        this.questions[i].topAnswerId = topAnswer.id;
        this.questions[i].topAnswerUser = topAnswer.userName;
        this.questions[i].topAnswerContent = topAnswer.answer;
        // console.log(this.questions[i]);
      } else {
        if (this.questions[i].answers.length > 0 ) {
        this.questions[i].topAnswerId = this.questions[i].answers[0].id;
        this.questions[i].topAnswerUser = this.questions[i].answers[0].userName;
        this.questions[i].topAnswerContent = this.questions[i].answers[0].answer;
        }
      }
    }
  }

  onChangePage(pageOfItems: Array<Question>) {
    this.pageOfItems = pageOfItems;
  }

  onQuestionItemClick(question: Question) {
    console.log("clicked!");
    console.log(question);
    this.selectedQuestion = question;
    // this.router.
    this.questionService.storeSelectedQuestion(this.selectedQuestion);
    this.router.navigate(['dashboard/questions/details']);
  }

  setMeeting(meetingUserQuestion: Question) {
    this.questionService.setMeetingUserName(meetingUserQuestion);
    this.router.navigate(['dashboard/requests/add']);
  }
}
