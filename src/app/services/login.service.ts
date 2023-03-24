// Podemos pensar que o service é como uma function, podemos usá-lo em vários lugares, sem precisar escrever tudo o código.
// E aqui no arquivo, vamos realizar uma requisição do LOGIN. 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Injeção de dependecia -> É uma forma bem simples que nos traz tudo o que precisamos para um componente funcionar perfeitamente. E é isso que fizemos com o HttpClient.
  constructor(private httpClient: HttpClient ) {}

  url = "http://localhost:3000/login"

  // O método login(), traz o parametro usuário que importa a class User do arquivo models/user.
  // USUARIO é a nosso valor objeto que recebe as infor,ações da Class User. 
  // O Observable siginifica que 
  login(usuario: User): Observable<any>{
    // O stringify, nessa situação está tranformando o valor em um valor JSON. 
    return this.httpClient.post(this.url, JSON.stringify(usuario), {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      // O uso do observe: "response" faz com que nosso retorno tenha as informações do cabeçalho e o status code. 
      observe: "response"
    })
  }

}
