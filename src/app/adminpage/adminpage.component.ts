import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Usermodel } from '../usermodel.model';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) {   }

  userDetails:Usermodel[]= [];

  ngOnInit(): void {
     this.api.getUserModel().subscribe(data => {
      this.userDetails = data;
    });
    console.log(this.userDetails)
  }

  onDeleteUserDetails(row: any) {
    this.api.deleteUserModel(row.id)
    .subscribe(res => {
      alert("User Detail Deleted successfully...");
      window.location.reload();

    })
  }

  onLogout() {
    this.router.navigate(['/admin']);
  }
}
