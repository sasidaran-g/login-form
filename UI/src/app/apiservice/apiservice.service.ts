import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  Url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log('email:', email);
    console.log('password:', password);
    return this.http.post(`${this.Url}/logincheck`, { email, password });
  }
}
