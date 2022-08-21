import {Component, OnInit} from '@angular/core';
import {LoginSignupService} from '../../services/login-signup.service';
// import {error} from "util";
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private locationStrategy: LocationStrategy) {
  }

  ngOnInit() {
    history.pushState(null, null, window.location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }
}
