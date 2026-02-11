interface ILivro {
    titulo: string,
    autor: string,
    anoPublicacao: number
}

function resumirLivro(livro: ILivro) : string {
    
    let titulo = livro.titulo
    let autor = livro.autor
    let ano = livro.anoPublicacao

    const fraseFinal: string = `O livro "${titulo}" foi escrito por ${autor} em ${ano}.`

    return fraseFinal
}

let meuNovoLivro: ILivro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
}

let resumo = resumirLivro(meuNovoLivro)
console.log(resumo)