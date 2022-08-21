import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';

@Component({
  selector: 'app-skills-board',
  templateUrl: './skills-board.component.html',
  styleUrls: ['./skills-board.component.scss']
})
export class SkillsBoardComponent implements OnInit {
  private user: User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
  }



}
