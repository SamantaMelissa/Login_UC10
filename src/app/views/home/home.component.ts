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

    userModel = new User()

    onSubmit(){
      console.log(this.userModel)
      console.log(this.loginService.login)
    
      this.loginService.login(this.userModel).subscribe((response) => {
        console.log(response.body.user.email)
      })
    }
}
