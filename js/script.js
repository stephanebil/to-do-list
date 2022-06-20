// document.getElementById("push").onclick = function(e){
//     console.log('e',e);
// };

// document.getElementById("push").addEventListener('click',function(){
//     console.log ("click")
// });


document.getElementById("push").onclick = function(){
    let elInput = document.getElementById("todo-input").value;
    console.log (elInput);
    // condition validate form
    // Si le champ d'input est vide
    // Si la longueur de la valeur texte est inférieur à 5
    // Si le longueur de la tâche est supérieur à 35 caractères
    if(elInput==""){
        alert("Ajoute un tâche");
    } else if (elInput.length<3){
        alert("tache trop courte!");
    } else if (elInput.length > 35){ 
        alert("tache trop longue");
    } else {
      console.log("tout est ok");
      // selectionne la div où les taches vont être affichés
      document.querySelector(
        "#tasks"
      ).innerHTML += `<div class=" d-flex justify-content-between align-items-center mb-3 border-bottom py-3">
        <span class="my-0 taskname" >${elInput}</span>
        <button class="btn btn-danger delete">Delete</button>
        </div>`;
      
      // delete task (attention rajouter classe .delete ci dessus)
      let tasksDelete = document.querySelectorAll(".delete");
      console.log("tasksDelete", tasksDelete);
      for (let i = 0; i < tasksDelete.length; i++) {
        tasksDelete[i].onclick = function () {
          console.log("click delete");
          // selectionne moi le noeud parent et efface moi tout
          this.parentNode.remove();
        };
      }

      // task done (attention rajouter classe .taskname ci dessus
      let tasksDone = document.querySelectorAll(".taskname");
      for (let i = 0; i < tasksDone.length; i++) {
        tasksDone[i].onclick = function () {
          console.log("task done");
          // créer une classe completed sur css (voir css)
          this.classList.toggle("completed")
        };
      }
    // lorsqu'on appuie sur Ajouter la valeur dans todo-input revient à 0
      document.querySelector("#todo-input").value=""
    }
};

