import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Usermodel } from '../usermodel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user !:{id: number};

  userDetail!:Usermodel;

  constructor(private api: ApiService,
    private route: ActivatedRoute, private router: Router,
    private formBuider: FormBuilder) { }

  updateUserDetailsObj !: Usermodel;

  updateFormValue !: FormGroup;

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id']
    }
    this.api.getUserModel().subscribe(data => {
      for(let x of data) {
          if(x.id == this.user.id) {
            this.userDetail = x;
            break;
          }
      }
    })
    this.route.params
    .subscribe((params: Params) => {
      this.user.id = params['id']
    })

  this.updateFormValue = this.formBuider.group ({
    id: [''],
    up_name : [''],
    up_email : [''],
    up_gender: [''],
    up_phno: [''],
    up_pwd: ['']
  })


  }

  onLogout() {
    this.router.navigate(['/login']);
  }

  display = "none";

  openModal() {
    this.display = "block";
    this.updateFormValue.controls['up_name'].setValue(this.userDetail.reg_name);
    this.updateFormValue.controls['up_email'].setValue(this.userDetail.reg_email);
    this.updateFormValue.controls['up_gender'].setValue(this.userDetail.gender);
    this.updateFormValue.controls['up_phno'].setValue(this.userDetail.reg_phno);
    this.updateFormValue.controls['up_pwd'].setValue(this.userDetail.reg_pwd);
  }
  onCloseHandled() {
    this.display = "none";
  }

  onUpdateUserDetails() {
    this.updateUserDetailsObj = {
      id : this.userDetail.id,
      reg_name : this.updateFormValue.value.up_name,
      reg_email : this.updateFormValue.value.up_email,
      gender : this.updateFormValue.value.up_gender,
      reg_phno : this.updateFormValue.value.up_phno,
      reg_pwd : this.updateFormValue.value.up_pwd,
    }

    this.api.updateUserModel(this.updateUserDetailsObj, this.userDetail.id)
    .subscribe(res => {
      alert('updated Successfully');
      window.location.reload()
    })
  }

}
