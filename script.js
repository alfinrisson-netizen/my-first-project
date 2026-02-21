let myInput = document.getElementById("taskInput");
let btn = document.getElementById("addBtn");
let list = document.getElementById("tasklist");

btn.addEventListener("click", function(){
    const taskText = myInput.value;

    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    


    dbtn.addEventListener("click", function(){
        li.remove();
       
    })

    list.appendChild(li);
    
    myInput.value = "";
});