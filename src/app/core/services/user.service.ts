import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable,of,catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/auth'


  register(user: User): Observable<any> {

    return this.http.post<any>(`${this.url}/register`, user).pipe(

      catchError(this.handleError<any>('register'))
    );

  }
  login(name:string,password:string): Observable<any> {

    return this.http.post<any>(`${this.url}/login`,{name,password}).pipe(

      catchError(this.handleError<any>('login'))
    );

  }
  private handleError<T>(operation = 'operation'): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.log(error);
      return throwError(() => error)
    };
  }
}
