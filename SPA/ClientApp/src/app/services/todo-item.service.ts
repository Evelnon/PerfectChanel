import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { TodoItem } from '../home/home.component';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TodoItemService {

  private url: string = 'https://localhost:5001/';
   

  constructor(private http: HttpClient) {

  }

  getTodoList(): Observable<any[]> {
    
    return this.http.get<TodoItem[]>(this.url + 'api/todo/GetTodoList').pipe(map(data => {return data;}));
  }

  updateTodoStatus(item: TodoItem): Observable<TodoItem>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    var data = JSON.stringify(item);

    return this.http.put<TodoItem>(this.url + 'api/todo/UpdateTodoStatus', data, {
      headers: headers
    }).pipe(catchError(this.handleError.bind(this)));
  };

  addTodo(item: TodoItem): Observable<TodoItem> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');    
    var data = JSON.stringify(item);

    return this.http.post<TodoItem>(this.url + 'api/todo/AddTodo', data, {
      headers: headers
    }).pipe(catchError(this.handleError.bind(this)));
  };

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }

    // return an observable with a meaningful error message to the end user
    return throwError('There is a problem with the service.We are notified & working on it.Please try again later.');
  }
}




