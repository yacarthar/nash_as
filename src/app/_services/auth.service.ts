import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Post } from '../_services/post';

const AUTH_API = 'https://60dff0ba6b689e001788c858.mockapi.io/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get(AUTH_API)
      .pipe(
        tap(_ => console.log('fetched token')),
        catchError(this.handleError<Post[]>('getHeroes', []))
      );;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
