import {Component, OnInit} from '@angular/core';
import {User} from '../../classes/user';
import {LoginSignupService} from '../../services/login-signup.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user: User;

  constructor(private loginSignupService: LoginSignupService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.user = new User();
    console.log('Login initialised');
  }

  loginUser() {
    console.log('in login');
    this.loginSignupService.loginUser(this.user).subscribe(
      data => {
        if (data['statusCode'] === '412') {
          console.log(data);
          this.userService.setterToken(data['token']);
          this.userService.setterUser(data['data']);
          this.router.navigate(['/dashboard']);
        } else {
          alert('Authentication Failed');
        }
      },
      error => {
        console.log(error);
        alert('Invalid Login ID/ Password');
      }
    );

  }

}
