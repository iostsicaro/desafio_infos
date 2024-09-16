import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Veiculo } from '../../models/veiculo.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  listarVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.apiUrl}/listarveiculos`, { headers: this.getHeaders() }).pipe(
      map((response: any) => response as Veiculo[])
    );
  }

  encontrarVeiculoId(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.apiUrl}/veiculo/${id}`, { headers: this.getHeaders() }).pipe(
      map(veiculo => veiculo)
    );
  }

  criarVeiculo(veiculo: Veiculo): Observable<any> {
    return this.http.post<{ mensagem: string }>(`${this.apiUrl}/criarveiculo`, veiculo, { headers: this.getHeaders() });
  }

  atualizarVeiculo(id: number, veiculo: Partial<Veiculo>): Observable<string> {
    return this.http.put<{ mensagem: string }>(`${this.apiUrl}/atualizarveiculo/${id}`, veiculo, { headers: this.getHeaders() }).pipe(
      map(response => response.mensagem)
    );
  }

  removerVeiculo(id: number): Observable<string> {
    return this.http.delete<{ mensagem: string }>(`${this.apiUrl}/removerveiculo/${id}`, { headers: this.getHeaders() }).pipe(
      map(response => response.mensagem)
    );
  }
}