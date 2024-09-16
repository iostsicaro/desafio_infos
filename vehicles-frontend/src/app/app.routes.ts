import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: CadastroComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
