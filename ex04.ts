interface IUsuario {
    nome: string,
    email: string,

    exibirInfo() : string
}

let user: IUsuario = {
    nome: "Emanuel Fontanha",
    email: "emanuelmfontanha@gmail.com",

    exibirInfo() {
        
        let info: string = `Nome: ${this.nome} - Email: ${this.email}`
        return info
    }
}

console.log(user.exibirInfo())