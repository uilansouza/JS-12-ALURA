import { aceitouSalvar } from "../storage/aceitouSalvar.js";
import {paginaInicial, setPaginaInicial} from "../storage/paginaInicial.js";
import { formataEndereco } from "../endereco/formataEndereco.js";

if(aceitouSalvar === true){

    let pagina= paginaInicial;

    if(!paginaInicial){
        pagina = prompt('Escolha a pagina inicial: ');
    }


    if(pagina)
    {
        pagina = formataEndereco(pagina)
        setPaginaInicial(pagina);
    }
}