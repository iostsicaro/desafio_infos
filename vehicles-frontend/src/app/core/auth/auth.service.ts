import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login';
  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, senha }).pipe(
      tap(response => {
        localStorage.setItem('TOKEN', response.token);

        this.tokenSubject.next(response.token);

        this.router.navigate(['/dashboard']);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('TOKEN');

    this.tokenSubject.next(null);

    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('TOKEN');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}