//@ts-check   //Verifica os tipos quando é usado os document
const listaTarefas =[]

/**
 * 
 * @param {string} tarefa | É necessário informar um variável do tipo string no caso, a variável
 * @param {void}
 */
function adicionarTarefa(tarefa)
{
    let tarefaExiste = listaTarefas.find(tarefaLista =>{
        return tarefaLista.localeCompare(tarefa, undefined, {sensitivity: 'base'})==0
        
    });

    if(tarefaExiste){
        alert("Essa Tarefa ja existe");
    }
    else{
        listaTarefas.push(tarefa)
        alert('Tarefa adicionada com sucesso');
    }
}
/**
 * 
 */
function getTarefas()
{
    return listaTarefas;
}

/**
 *  Remove um item da lista de tarefas
 * @param {number} posicao  posicao do item a ser removido do array de tarefas
 * @returns {void}
 */
function removeTarefas(posicao)
{
    if(posicao <0 || posicao >= listaTarefas.length){
        alert("Posição fornecida é Inválida")
    }
    else{
        listaTarefas.splice(posicao, 1)
        alert('Tarefa removida com sucesso')
    }
}
