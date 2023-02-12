

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
      <button class="delete">❌</button>
      <button class="mark">✅</button>
    </div>
    `;

    let tarefaAtual = document.querySelectorAll('.delete');
    for(let i =0; i < tarefaAtual.length; i++){
      tarefaAtual[i].onclick = () => {
        tarefaAtual[i].parentNode.remove();
      }
    }

    // Assim que o botão mark for clicado, vou percorrer as divs que contém nome-da-tarefa e vou adicionar a classe 'completed'
    
    let tarefa = document.querySelectorAll('#nome-da-tarefa');
    for(let i =0; i < tarefa.length; i++){
      document.querySelector('.mark').onclick = () => {
        tarefa[i].classList.toggle('completed');
      }
    }

    document.querySelector("#nova-tarefa input").value = "";

  }
}
