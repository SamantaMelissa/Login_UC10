// Aqui, estamos criando uma classe "User" que terá como atributo: email e password 
export class User {
    // O método constructor é usado para criar e inicializar um objeto criado a partir de uma classe. 
    constructor(
        // string significa o tipo do nosso dado, ele pode ser int, float, string... Como aqui temos um tipo texto, que pode ter número, letras e caractéres, usamos o STRING. 
        public email?: string,
        public password?: string
    ){
        
    }
}
