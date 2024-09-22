const input = document.querySelector("#input-value");
const listContainer = document.querySelector("#list-container");
const taskCount = document.querySelector("#task-count");
const addBtn = document.querySelector("#add");

addBtn.addEventListener(
    "click",
    addTask,
    false
);

function addTask() 
{
    if(input.value === "") 
        {
            alert("Write a task!");
        }
        else
        {
            let li = document.createElement("li");
            li.innerHTML = input.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        input.value = "";
        arrayFunction();
        saveData();
}

listContainer.addEventListener("click", function(e)
{
    if (e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
        
        }
        else if (e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
            
        }
        arrayFunction();
        saveData();
});

function arrayFunction() 
{
    const toDos = [];

    for (let i = 0; i < listContainer.children.length; i++) {
        let toDo = listContainer.children.item(i);

        let toDoInfo = 
        {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("checked")
        };
        
        toDos.push(toDoInfo);

        resultCounter(toDos);
    }
    console.log(toDos);
}

function resultCounter(toDos)
{
const taskCompleted = toDos.filter(task => task.completed);
const numberCompletedTasks = taskCompleted.length;
taskCount.textContent = numberCompletedTasks;
console.log(numberCompletedTasks);
}

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

