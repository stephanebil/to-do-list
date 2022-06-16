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
        console.log ("tout est ok")
        // selectionne la div où les taches vont être affichés
        document.querySelector("#tasks").innerHTML += 
        `<div class=" d-flex justify-content-between align-items-center mb-3">
        <span class="my-0" >${elInput}</span>
        <button class="btn btn-danger">Delete</button>
        </div>`
        ;
    }
};

