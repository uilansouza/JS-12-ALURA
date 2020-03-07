let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar')) //TRANSFORMA EM UMA ESTRUTURA OBJETO

if(aceitouSalvar === null){
    aceitouSalvar = confirm('Você aceita que a gente salve suas informações ?');

    if(!aceitouSalvar){
        alert('Você pode mudar isso na pagina de configurações mais tarde');
    }
    localStorage.setItem('aceitouSalvar',aceitouSalvar)
}