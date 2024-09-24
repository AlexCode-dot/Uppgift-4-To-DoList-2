const input = document.querySelector("#input-value");
const listContainer = document.querySelector("#list-container");
const taskCount = document.querySelector("#task-count");
const addBtn = document.querySelector("#add");
const warningText = document.querySelector("#warning-text");

addBtn.addEventListener(
    "click",
    addTask,
    false
);

function addTask() 
{
    if(input.value === "") 
        {
            warningText.innerHTML = "Write a task!";
        }
        else
        {
            warningText.innerHTML = "";
            const li = document.createElement("li");
            li.innerHTML = input.value;
            listContainer.appendChild(li);
            const span = document.createElement("span");
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
        removeOne();
        saveData();
});

function arrayFunction() 
{
    const toDos = [];

    for (let i = 0; i < listContainer.children.length; i++) {
        const toDo = listContainer.children.item(i);

        const toDoInfo = 
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

function removeOne()
{
    if (listContainer.children.length === 0)
        {
            taskCount.textContent = 0;
        }
        
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
