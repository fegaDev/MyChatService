import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeChat:string =  "../../../assets/iconChat.jpg";
  welcomeIcon:string = "../../../assets/src-login/hola.png";
  bienvenido:string = "Estamos contentos de verte"
}
