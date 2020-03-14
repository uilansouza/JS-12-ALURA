const listadeSites = JSON.parse(sessionStorage.getItem('historico')) || []
let posicao = JSON.parse(sessionStorage.getItem('posicaoHistorico')) || -1

export function adicinar(endereco){

}

export function voltar(){
    if(posicao >0){
        posicao --;
        sessionStorage.setItem('posicaoHistorico',posicao);
        return listadeSites[posicao];
    }

}

export function avancar(){
    if (posicao <=listadeSites.length -1){
        posicao ++;
        sessionStorage.setItem('posicaoHistorico',posicao)
        return listadeSites[posicao]
    }
}