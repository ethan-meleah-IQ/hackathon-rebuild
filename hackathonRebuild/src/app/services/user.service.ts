import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { getLocaleCurrencyCode } from '@angular/common';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<User[]> {
    //console.log('Getting all users!');
    return this.http.get<User[]>(baseUrl);
  }

  getUser(id: any): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`)
  }

  createUser(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  getUserByEmail(email: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?email=${email}`);
  }

}
 