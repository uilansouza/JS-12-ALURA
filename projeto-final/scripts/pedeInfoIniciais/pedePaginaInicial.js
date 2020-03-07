if(aceitouSalvar === true){

    let paginaInicial =localStorage.getItem('paginaInicial');
    let regex =/https?:\/\/.+/

    if(!paginaInicial){
        paginaInicial = prompt('Escolha a pagina inicial: ')
    }


    if(paginaInicial){
        if (!regex.test(paginaInicial)){
            paginaInicial = 'https://'+paginaInicial;
        }

        $janelaPrincipal.src = paginaInicial;
        $inputEndereco.value = paginaInicial;
        localStorage.setItem('paginaInicial',paginaInicial);
    }
}