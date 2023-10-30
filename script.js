const item = document.querySelector("#item");
const ToDoBox = document.querySelector("#Todo-Box");

item.addEventListener(
    "keyup" ,
    function(event){
    if(this.value !== " " && event.key == "Enter"){
        addToDo(this.value);
        this.value = " ";

    }
})

const addToDo = (item) => {
    // TO ADD TASKS
    const listItem = document.createElement("li");
    // const toDoContent = document.createElement("span");
    listItem.innerHTML = 
   `<div id="text">${item}</div><i class="fa-solid fa-circle-xmark"></i>`;
    ToDoBox.appendChild(listItem);
    let span1 = document.createElement("span");
    span1.innerHTML = `<i id="edit"  class="fa-solid fa-pen"></i>`;
    listItem.appendChild(span1);
    span1.addEventListener("click",function(){
    document.getElementById("text").setAttribute('contenteditable',true);
        
    });

    //TO  CHECK THE TASK WHEN IT IS DONE
    listItem.addEventListener("click",function(){
        this.classList.toggle('done');
    })

    
    //TO REMOVE TASKS
    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })

    
    
    }

