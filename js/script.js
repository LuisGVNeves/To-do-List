window.addEventListener('load',() => {

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
        <button class="pen">🖊️</button>
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
      let check = document.querySelectorAll('.mark');
      let modifierInput = document.querySelectorAll('.pen');
      
      for(let i =0; i < tarefa.length; i++){
        check[i].onclick = function() {
          tarefa[i].classList.toggle('completed');
        }
  
        modifierInput[i].onclick = function() {
          // Valor Atual do input 
          let resultado = tarefa[i].innerHTML;
  
          // Crio uma div, que vai carregar um novo input, e esse input agora vai receber o valor do input de cima linha 41, e depois vou colocar esse novo input com o valor antigo (Nessa parte o input já vai estar sendo reconhecido para novas edições). Em seguida coloco esse input na div
          let div = document.createElement('div');
          let novoInput = document.createElement('input');
          novoInput.id = "novo-input";
          novoInput.value = resultado;
          div.appendChild(novoInput);
  
          // Crio um botão para assim que o usuário editar esse input novo, eu consiga escutar o evento de clique desse botão e faça as alterações necessárias
          let buttonMark = document.createElement('button');
          buttonMark.innerHTML = "✅";
          buttonMark.classList.add("mark-2");
          div.appendChild(buttonMark);
  
          document.querySelector("#tarefas").appendChild(div);
          
  
          // Assim que usuário clica no botão de marcar no novo input, eu apago o input atual, e adiciono o input editado, e depois escondo a div que criei com a classe hide, para que ela desapareça do HTML, ficando apenas o input editado
          buttonMark.addEventListener('click', () => {
            tarefa[i].innerHTML = "";
            tarefa[i].innerHTML = novoInput.value;
  
            div.classList.add("hide");
          })
        }
      }
  
  
      // Resetando valor do input
      document.querySelector("#nova-tarefa input").value = "";
  
    }
  }

})


