import { Injectable, Inject } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import {User} from '../beans/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Token } from '../beans/token';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 private _isLogged;
 protected token: Token;
 private user: Observable<User> = null;
 private errorMessage: string = undefined;
 private storeKey = 'accessToken';

 constructor(
   @Inject(HttpClient) private http: HttpClient,
   @Inject(LocalStorageService) private localStorage: LocalStorageService) {

     this.token = null;
     this.user = null;
     this._isLogged = false;
   }




 login = (login: string, passwd: string): Observable<Token> => {
  // const body = JSON.stringify({ login, password: passwd });
  const body = 'j_username=' + login + '&j_password=' + passwd + '&_spring_security_remember_me=true&submit=Login';
  const httpOptions = {
   headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'})
  };
  const headers = new  HttpHeaders({'Content-Type': 'application/json'});
  return this.http.post<Token>('/api/app/user/authentication', body, httpOptions )
   .pipe(
         tap( (token: Token) => {
                  this._isLogged = true;
                  if (token != null) { this.token = token; }
                },
               error => this.logError( error)
            )
        );
 }

 logout = (): void => {
  this.http.get<User>('/api/app/user/logout').subscribe();
  this._isLogged = false;
  this.user = null;
  this.token = null;
 }

 get isLogged(): boolean {
  return this._isLogged;
 }


 getUser = (): Observable<User> => {
  const headers = new  HttpHeaders({'Content-Type': 'application/json'});
  if ( !this.user ) {
      this.user = this.http.get<User>('/api/app/user/account')
      .pipe(
         tap( (user: User) => { this._isLogged = true; console.log('user' + user.login); },
              error => this.logError( error)
            )
        );
    }
  return this.user;
 }


 validate = (): Observable<any> => {
  const headers = new  HttpHeaders({'Content-Type': 'application/json'});
  debugger;
  if ( this.user == null ) {
      return this.http.get('/api/app/user/validate')
      .pipe(
         tap( () => {
                debugger;
                this._isLogged = true;
                console.log('user  validated');
              },
              error => this.logError( error)
            )
        );
    }
 }


 getTokenAccess(): string {
    if (this.token !== null && this.token.access_token !== undefined ) {
      return this.token.access_token;
    } else {
       return undefined;
    }
 }

 private logError(error: any) {
  this.errorMessage = `UserService got error "${error.message}".`;
  console.error(this.errorMessage);
 }

}
