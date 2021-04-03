import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usermodel } from 'src/app/interface/usermodel';
import { map } from 'rxjs/operators';
import { Ordermodel } from 'src/app/interface/ordermodel';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  rootUrl:string=`http://localhost:9000/users`;
  constructor(private http:HttpClient) { }

  addUser(user:Usermodel):Observable<Usermodel>{
    return this.http.post<Usermodel>(this.rootUrl,user);
  }
  getProducts(user:string):Observable<Ordermodel[]>{
    return this.http.get<Ordermodel[]>(`${this.rootUrl}/${user}/product`);
  }
  getUsers():Observable<Usermodel[]>{
    return this.http.get<Usermodel[]>(this.rootUrl);
  }
  getUser(control: AbstractControl):Observable<Usermodel>{
    return this.http.get<Usermodel>(`${this.rootUrl}/${control.value}`);
  }
  checkUser(username:String,password:String):Observable<Usermodel>{
    return this.http.get<Usermodel>(`${this.rootUrl}/${username}/${password}`)
  }
  updateUser(user:Usermodel):Observable<Usermodel>{
    return this.http.put<Usermodel>(this.rootUrl,user);
  }
  userNameValidation():  AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.getUser(control).pipe(
        map(res => {
          // if res is true, username exists, return true
          return res ? { usernameExists: true } : null;
          // NB: Return null if there is no error
        })
      );

      };
  }
  
  
}
