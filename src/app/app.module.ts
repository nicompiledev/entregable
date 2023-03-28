import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LoginComponent } from './components/login/login.component';




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
    LoginComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    RatingModule.forRoot(),

    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
