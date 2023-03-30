import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    const { email, nombre, password } = this.form.value;
    const body = { email, nombre, password };

    this.http.post('http://localhost:4000/api/usuarios', body).subscribe(
      (response) => {
        console.log(response);
        // Handle success
      },
      (error) => {
        console.log(error);
        // Handle error
      }
    );
  }



}
