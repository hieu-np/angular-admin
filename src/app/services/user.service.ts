import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from '../User';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = "http://localhost:5000/users"
  private apiUrl = "https://62947bc3a7203b3ed069dbdd.mockapi.io/users"
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  getUser(id: any): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url)
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user, httpOptions)
  }

  deleteTask(user: User): Observable<User>{    
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  searchUsers(term: string): Observable<User[]>{
    if(!term.trim()){
      return of ([]);
    }

    return this.http.get<User[]>(`${this.apiUrl}/?${term}`)
  }

}
