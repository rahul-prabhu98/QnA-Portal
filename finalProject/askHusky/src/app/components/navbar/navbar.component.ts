import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router, private locationStrategy: LocationStrategy) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
    history.pushState(null, null, window.location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, window.location.href);
  });
  }

  goToProfile() {
    this.router.navigate(['/dashboard/profile']);
  }

  goToCreateQuestion() {
    this.router.navigate(['/create-question']);
  }

  logoutBtn() {
    this.user = new User();
    this.router.navigate(['/']);
  }
}
