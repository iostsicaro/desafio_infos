import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  onSubmit(): void {
    this.authService.login(this.email, this.senha).subscribe(
      () => {
        console.log('Login bem-sucedido');
      },
      error => {
        console.error('Erro no login', error);
      }
    );
  }

  goToCadastro() {
    this.router.navigate(['/cadastrar']);
  }
}
