import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showSearchBox: boolean = false;
  showMenu: boolean = false;

  toggleSearchBox() {
    this.showSearchBox = !this.showSearchBox;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  login() {
    // lógica de inicio de sesión
  }

  register() {
    // lógica de registro
  }





}
