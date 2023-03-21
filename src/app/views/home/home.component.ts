import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(private loginService : LoginService){}

    // Instanciando uma classe:
    userModel = new User()

    onSubmit(){
      console.log(this.userModel)
      console.log(this.loginService.login)
    
      // O subscribe é um operador do Observable.Ao usar ele, estamos falando que, assim que nossa requisição for realizada e nosso texto se transformar em JSON, seremos notificados, e além disso, receberemos as informações do usuários. Esse cara faz tudo de forma rápida e unidimencional. 
      this.loginService.login(this.userModel).subscribe((response) => {
        console.log(response.body.user.email)
      })
    }
}
