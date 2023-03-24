import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user'
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
    constructor(private loginService : LoginService, private router : Router){}
    
    mensagemok = "Deu certo!"
    mensagemERRO = " "
    dicas = " "
    // Instanciando uma classe:
    userModel = new User()

    onSubmit(){
      // O subscribe é um operador do Observable.Ao usar ele, estamos falando que, assim que nossa requisição for realizada e nosso texto se transformar em JSON, seremos notificados, e além disso, receberemos as informações do usuários. Esse cara faz tudo de forma rápida e unidimencional. 
      this.loginService.login(this.userModel).subscribe((response) => {
        // Se ok:
        console.log(this.mensagemok)
        this.router.navigateByUrl("/contato")
      },(respErro) => {
        // Se erro:
        // console.log(respErro.error)
        this.mensagemERRO = respErro.error
        if(this.mensagemERRO == 'Password is too short'){
          this.mensagemERRO = "A senha está muitooo pequena!"
          this.dicas = " Utilize mais de três caractéres"
        }else{
          this.dicas = ""
        }
      })
    }
}
