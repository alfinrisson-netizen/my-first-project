let myInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("tasklist");

let tasks = [];

addBtn.addEventListener("click", function(){
    const taskText = myInput.value;

    if (taskText === "") return;

    tasks.push(taskText)
    localStorage.setItem("tasks",JSON.stringify(tasks));

    addTextToDOM(taskText);
    myInput.value = "";

   
})

function addTextToDOM(taskText){
    const li = document.createElement("li");
    li.textContent = taskText;

    const dbtn = document.createElement("button");
    dbtn.textContent = "delete";

    dbtn.addEventListener("click", function(){
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.remove();
        dbtn.remove();
    })

     list.appendChild(li);
     list.appendChild(dbtn);
}

window.onload = function(){
    const storedText = this.localStorage.getItem("tasks");
    
    if(storedText){
        tasks = JSON.parse(storedText);
     tasks.forEach(task => addTextToDOM(task));
    }
}

