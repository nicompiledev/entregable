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
import { MatDialogModule } from '@angular/material/dialog'; // Importa el módulo MatDialogModule
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DialogModule } from 'primeng/dialog';
import { NzSelectModule } from 'ng-zorro-antd/select';



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
import { RegisterComponent } from './components/register/register.component';
import { BookingComponent } from './components/booking/booking.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoginTestComponent } from './login-test/login-test.component';


import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ModalTestComponent } from './components/modal-test/modal-test.component';
import { SignupComponent } from './components/signup/signup.component';


registerLocaleData(en);









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
    RegisterComponent,
    BookingComponent,
    AppointmentComponent,
    LoginTestComponent,
    ModalTestComponent,
    SignupComponent


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
    ButtonModule,
    CardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzGridModule,
    NzModalModule,
    DialogModule,
    NzSelectModule,


    BrowserAnimationsModule,
    MatDialogModule // Agrega MatDialogModule en los imports de tu módulo


  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
