

document.querySelector("#adicionar").onclick = function(){
  if(document.querySelector("#nova-tarefa input").value.length == 0){
    alert("Digite algum numero");
  }
  else{
    document.querySelector("#tarefas").innerHTML += `
    <div id="tarefa">
      <span id="nome-da-tarefa">
        ${document.querySelector("#nova-tarefa input").value}
      </span>
      <button class="delete">X</button>
    </div>
    `;

    let tarefaAtual = document.querySelectorAll('.delete');
    for(let i =0; i < tarefaAtual.length; i++){
      tarefaAtual[i].onclick = () => {
        tarefaAtual[i].parentNode.remove();
      }
    }

    let tarefa = document.querySelectorAll('#nome-da-tarefa');
    for(let i =0; i < tarefa.length; i++){
      tarefa[i].onclick = () => {
        this.classList.toggle('completed');
      }
    }

    document.querySelector("#nova-tarefa input").value = "";

  }
}
