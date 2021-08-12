import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Usermodel } from '../usermodel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userData !: Usermodel[];

  constructor(private http: HttpClient) { }

  postUserModel(data: Usermodel) {
    return this.http.post<Usermodel>("http://localhost:3000/posts", data)
    .pipe(map((res:Usermodel) => {
      return res;
    }))
  }

  getUserModel(): Observable<Usermodel[]> {
    return this.http.get<Usermodel[]>("http://localhost:3000/posts") as Observable<Usermodel[]>;
  }

  updateUserModel(data : Usermodel, id: number) {
    console.log(data);
    return this.http.put<any>("http://localhost:3000/posts/"+ id, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  deleteUserModel(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/"+ id)
    .pipe(map((res: any) => {
      return res;
    }))
  }
}
