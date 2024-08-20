import { changeTaskStatus } from "./changeTaskStatus";
import { clearElement } from "./clearElement";
import { sortTasksByDate } from "./sortTasks";

export function displayTasks(project){
    const taskList=document.createElement("ul");
    const tasksDiv=document.querySelector(".tasks");
    clearElement(tasksDiv);
    clearElement(taskList);
    sortTasksByDate(project);
    project.projectTasks.forEach(task => {
        const li=document.createElement("li")
        li.innerHTML = `${task.title} Due Date: ${task.dueDate.toLocaleString()} <br> ${task.description}`;
        li.classList.add(task.priority);
        const checkbox = document.createElement('input');
        const deleteButton=document.createElement("button");
        deleteButton.innerText='X';
        deleteButton.classList.add("delete-task");
        checkbox.classList.add("done-checkbox");
        checkbox.type='checkbox';
        if(task.isDone===true){
            checkbox.checked=true;
            li.classList.add("task-done");
        }

        checkbox.addEventListener("click", (e) => changeTaskStatus(e, task));

        li.appendChild(deleteButton);
        li.appendChild(checkbox);
        taskList.appendChild(li);
    });
    tasksDiv.appendChild(taskList);

}