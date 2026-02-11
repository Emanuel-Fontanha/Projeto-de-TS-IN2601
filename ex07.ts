interface IRespostaAPI<T> {
    dados: T,
    sucesso: boolean
}

const requisicao01: IRespostaAPI<string> = {
    dados: "200 OK",
    sucesso: true
}

const requisicao02: IRespostaAPI<number[]> = {
    dados: [4, 0, 0, 2, 8, 9, 2, 2],
    sucesso: false
}

console.log(requisicao01)
console.log(requisicao02)
