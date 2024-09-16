import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:3000/cadastrar', this.registerForm.value).subscribe({
        next: () => {
          alert('Usuário registrado com sucesso!');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert('Erro ao cadastrar: ' + err.error);
        }
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
