type Genero = "masculino" | "feminino"

interface IPessoa {
    nome: string,
    idade: number,
    genero: Genero
}

const apresentarPessoa = (pessoa: IPessoa) => `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`

let pessoa: IPessoa = {
    nome: "Emanuel",
    idade: 25,
    genero: "masculino"
}

console.log(apresentarPessoa(pessoa))