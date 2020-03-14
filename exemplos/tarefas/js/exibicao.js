//@ts-check
import {getTarefas, removeTarefa } from "./tarefas.js"
/**
 * Exibe a lista de tarefas na DOM para um formulario
 * @returns {void}
 */
export function exibirTarefas()
{
    let listaDeTarefas = getTarefas();
    let itenHtml = ""

    listaDeTarefas.forEach((tarefa,indice) => {
        
        itenHtml += `
        <table>
        
            <tr>
               <td> ${tarefa}</td>
               <td> <button data-posicao=${indice}>
                    Excluir
                </button></td>
            </tr>
        <table>
        `;

    });

    if(listaDeTarefas.length ==0){
        mostradorLista.innerHTML ="Nenuma tarefa foi adiciona ainda ;("
    }else{
        mostradorLista.innerHTML = itenHtml
    }

}
mostradorLista.onclick = (event)=>{
    if(event.target.tagName =='BUTTON'){
        let posicao = parseInt(event.target.dataset.posicao); //dataset.posicao é o data-posicao no form
        removeTarefa(posicao);
        exibirTarefas()
    }
   
}