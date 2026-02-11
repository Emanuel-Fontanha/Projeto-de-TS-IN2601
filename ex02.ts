type StatusRequisicao = "sucesso" | "erro" | "carregando"

function mostrarMensagemStatus(text: StatusRequisicao) : string {
    if (text === "sucesso") {
        return "Requisição finalizada! Os dados foram coletados com sucesso."
    } else if (text === "erro") {
        return "Requisição negada. Dados não liberados."
    } else {
        return "Aguarde... carregando dados."
    }
}

let status: StatusRequisicao = "carregando"
let mensagem = mostrarMensagemStatus(status)

console.log(mensagem)