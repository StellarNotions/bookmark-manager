import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  private categoriesUrl = 'api/categories';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  /** Log a BookmarkService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BookmarkService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCategories(): Observable<{}[]> {
    return this.http.get<{}[]>(this.categoriesUrl).pipe(
      tap(categories => this.log('fetched categories')),
      catchError(this.handleError('getCategories', []))
    );
  }
}
