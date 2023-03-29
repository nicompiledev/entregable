import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { ConfirmarCuentaComponent } from './components/usuario/confirmar-cuenta/confirmar-cuenta.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RecuperarContrasenaComponent } from './components/usuario/recuperar-contrasena/recuperar-contrasena.component';
import { NuevaContrasenaComponent } from './components/usuario/nueva-contrasena/nueva-contrasena.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { ActualizarPerfilComponent } from './components/usuario/actualizar-perfil/actualizar-perfil.component';
import { ActualizarPasswordComponent } from './components/usuario/actualizar-password/actualizar-password.component';




import { ChooseServiceComponent } from './components/choose-service/choose-service.component';
import { RatingComponent } from './components/rating/rating.component';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component';
import { AboutComponent } from './pages/about/about.component';
import { PartsComponent } from './pages/parts/parts.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FooterComponent } from './pages/footer/footer.component';







@NgModule({

  declarations: [
    AppComponent,
    ChooseServiceComponent,
    RatingComponent,
    TestComponent,
    HeaderComponent,
    HomeComponent,
    CarsComponent,
    AboutComponent,
    PartsComponent,
    BlogComponent,
    FooterComponent,
    RegistrarComponent,
    ConfirmarCuentaComponent,
    LoginComponent,
    RecuperarContrasenaComponent,
    NuevaContrasenaComponent,
    PerfilComponent,
    ActualizarPerfilComponent,
    ActualizarPasswordComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    RatingModule.forRoot(),
    MatInputModule,
    MatIconModule,

    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
