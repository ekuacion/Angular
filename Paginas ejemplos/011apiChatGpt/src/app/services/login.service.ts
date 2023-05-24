import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: string;
  private apiUrl = 'https://api.openai.com/v1';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = {
      username: 'asdada@gmail.com',
      password: 'asdada+'
    };
    
    return this.http.post(this.apiUrl, body).pipe(
      map((response: any) => {
        if (response && response.token) {
          this.setToken(response.token);
        }
        return response;
      })
    );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}