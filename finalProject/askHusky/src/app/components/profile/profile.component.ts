import {Component, Input, OnInit} from '@angular/core';
import {LoginSignupService} from '../../services/login-signup.service';
import {User} from '../../classes/user';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

constructor(private loginSignupService: LoginSignupService, private router: Router, private userService: UserService) { }

changePasswordObj = { userName: null, oldPassword: null , newPassword: null };


ngOnInit() {
  }
  changePassword() {
    this.loginSignupService.changePassword(this.changePasswordObj).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.router.navigate(['/']);
  }


}


// getProfile() {
//     const body: any  = {
//
//     };
//     const headers: any = [];
//
//
//   }
// }
