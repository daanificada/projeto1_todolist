/*adiciona a tarefa nova*/
function novaTarefa(tarefa){

    let li = document.createElement('li');
    let Lista = document.querySelector('#item');
    let checkbox = document.createElement('input');
    let delbutton = document.createElement('button');
    let textoTarefa = document.createElement('span');

    Lista.appendChild(li);
    li.appendChild(checkbox);
    checkbox.type = 'checkbox';
    checkbox.addEventListener("click", linha);
    
    textoTarefa.innerHTML = tarefa;
    li.appendChild(textoTarefa);
    delbutton.classList = 'btnExcluir';
    delbutton.innerHTML = 'X';
    delbutton.addEventListener('click',
                                    function (event) 
                                        {
                                            let confirmar = confirm("Você já concluiu essa tarefa? To de olho hein! 👀");
                                            if (confirmar == true); {
                                                li.remove();
                                            }
                                            })
                                            li.appendChild(delbutton);
                                            salvar();
                                        }

/*insere no localstorage*/
function salvar(){
        let tarefas = document.querySelectorAll('#item li span');
        let listadTarefas = [];
        for (let tarefa of tarefas) {
            listadTarefas.push(tarefa.innerText);
        }
    localStorage.setItem('listadTarefas', JSON.stringify(listadTarefas));
    }

function linha(event){
    let linhaT = event.target.parentElement.children[1];
    let check = event.target;
    if (check.checked == true) {
        linhaT.classList.add('checked');
    } 
    if (check.checked == false){
        linhaT.classList.remove('checked');
    }
}
document.querySelector('.addBotton').addEventListener('click', function(){
        novaTarefa(document.querySelector('#tarefa').value);
    })

function atualizar()
{
    let listadTarefas = localStorage.listadTarefas;
    if (!listadTarefas) {
        alert('Por enquanto você não tem tarefas cadastradas, que tal cadastrar algo?');
    }
    
    listadTarefas = JSON.parse(listadTarefas)
    for (let tarefa of listadTarefas) {
        novaTarefa(tarefa)
    }
}
atualizar()