import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuth } from '../admin-auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminModel = new AdminAuth('', '');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAdminClicked() {
    if (this.adminModel.admin_email === "somu2420@gmail.com"){
      if (this.adminModel.admin_pwd === "24072000") {
        this.router.navigate(['/admin/admin-page']);
      }
      else {
        alert('Invalid Password!!!');
      }
    }
    else {
      alert('Invalid Email');
    }
  }

}
