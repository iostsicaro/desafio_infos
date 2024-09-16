import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private authService: AuthService) { }

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
}
