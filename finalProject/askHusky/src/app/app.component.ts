import { Component } from '@angular/core';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons/faArrowCircleUp';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons/faArrowCircleDown';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'askHusky';
  faArrowCircleUp = faArrowCircleUp;
  faArrowCircleDown = faArrowCircleDown;
}
