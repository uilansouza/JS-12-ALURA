export let aceitouTermosAntes = localStorage.getItem('aceitouTermos')

if (aceitouTermosAntes === null){
    
    let nome = prompt("Ola qual é o seu nome?");
    let aceitouOsTermos = confirm(`
        Olá, ${nome}

        Antes de usar o cake, precisa que você aceite nossos termos de uso:
        1 - Você aceita que o software foi feito no curso de javascript
        2 - Você aceita que seus dados  estão trafegando por uma rede não segura
        3 - Aceita, que doe muito
    

    `);

    if(!aceitouOsTermos){
        alert(nome + ', para continuar é necessário aceitar todos os temos e condições desse contrato!')
        window.close();
    }else{
        localStorage.setItem('aceitouTermos',true);
    }
}