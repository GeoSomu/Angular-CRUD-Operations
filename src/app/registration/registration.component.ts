import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usermodel } from '../usermodel.model';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userFormValue !: FormGroup;
  userDetailObj!: Usermodel;

  country_codeArray = [{'USA':'+1'}, {'India': '+91'}]

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.userFormValue = this.formBuilder.group({
      id: [''],
      reg_name : [''],
      reg_email : [''],
      gender: [''],
      reg_phno : [''],
      reg_pwd : ['']
    })
  }

  postUserDetailsToServer() {
    this.userDetailObj = {
      id: 0,
      reg_name : this.userFormValue.value.reg_name,
      reg_email : this.userFormValue.value.reg_email,
      gender : this.userFormValue.value.gender,
      reg_phno : this.userFormValue.value.reg_phno,
      reg_pwd : this.userFormValue.value.reg_pwd
    };
    // console.log(this.userDetailObj);
    this.api.postUserModel(this.userDetailObj)
    .subscribe(res => {
      console.log(res);
      alert("User Details Added Successfully.");
      this.router.navigate(['/login']);
      this.userFormValue.reset();
    },
    err => {
      console.log("something went wrong...");
    })
  }

}
