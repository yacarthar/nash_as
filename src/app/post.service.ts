import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient) { }
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  /** GET all posts from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl)
      .pipe(
        tap(_ => this.log('fetched post')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => this.log(`fetched post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }


  private log(message: string) {
    console.log(`getting post: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
