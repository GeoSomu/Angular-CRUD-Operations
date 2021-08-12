import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private api: ApiService, private router: Router) {
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
          this.router.navigate(['/home',this.userDetail[i].id]);
          loggedIn = true;
          break;
        }
        else{
          break;
        }
      }
      else{
        break;
      }

    }
    if(!loggedIn) {
      alert('invalid email/password');
    }
  }

}
