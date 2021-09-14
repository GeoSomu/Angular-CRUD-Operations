import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CanBGuard } from '../can-b.guard';
import { ApiService } from '../shared/api.service';
import { Usermodel } from '../usermodel.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  log_email!: string ;
  log_pwd!: string ;
  userDetail !: Usermodel[];
  isLoggedIn !: boolean;

  constructor(private api: ApiService, private router: Router, private authService: AuthService, private service:CanBGuard) {
   }


  ngOnInit(): void {
    this.api.getUserModel().subscribe(data => {
      this.userDetail = data;
    });
  }

  onLogin() {
    let loggedIn = false;
    for (let i=0; i<= this.userDetail.length; i++) {
      if (this.log_email === this.userDetail[i].reg_email) {
        if (this.log_pwd === this.userDetail[i].reg_pwd) {
          alert('Successfully');
          this.login();
          this.router.navigate(['/home',this.userDetail[i].id]);
          loggedIn = true;
          break;
        }
    }}
    if(!loggedIn) {
      alert('invalid email/password');
    }
  }

  login(): void {
    this.authService.login().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      console.log(this.isLoggedIn);
      // let redirect = this.authService.redirectUrl ?
      // this.authService.redirectUrl : '/home';
    })
  }

}
