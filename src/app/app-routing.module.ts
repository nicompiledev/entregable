import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActualizarPasswordComponent } from './components/usuario/actualizar-password/actualizar-password.component';
import { ActualizarPerfilComponent } from './components/usuario/actualizar-perfil/actualizar-perfil.component';
import { ConfirmarCuentaComponent } from './components/usuario/confirmar-cuenta/confirmar-cuenta.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { NuevaContrasenaComponent } from './components/usuario/nueva-contrasena/nueva-contrasena.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { RecuperarContrasenaComponent } from './components/usuario/recuperar-contrasena/recuperar-contrasena.component';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { AuthGuard } from './guard/auth.guard';
import { NoAuthGuard } from './guard/noAuth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent , canActivate: [NoAuthGuard]},
  { path: 'registro', component: RegistrarComponent, canActivate: [NoAuthGuard] },
  { path: 'confirmar/:token', component: ConfirmarCuentaComponent },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
  { path: 'nuevo-password/:token', component: NuevaContrasenaComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'perfil/:id', component: ActualizarPerfilComponent, canActivate: [AuthGuard] },
  { path: 'actualizar-password', component: ActualizarPasswordComponent, canActivate: [AuthGuard]},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
