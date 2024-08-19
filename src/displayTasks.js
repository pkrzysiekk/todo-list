import { changeTaskStatus } from "./changeTaskStatus";
import { clearElement } from "./clearElement";

export function displayTasks(project){
    const taskList=document.createElement("ul");
    const tasksDiv=document.querySelector(".tasks");
    clearElement(tasksDiv);
    clearElement(taskList);
    project.projectTasks.forEach(task => {
        const li=document.createElement("li")
        li.innerHTML = `${task.title} Due Date: ${task.dueDate.toLocaleString()} <br> ${task.description}`;
        li.classList.add(task.priority);
        const checkbox = document.createElement('input');
        checkbox.classList.add("done-checkbox");
        checkbox.type='checkbox';
        checkbox.addEventListener("click",(e)=>changeTaskStatus(e,task));

        li.appendChild(checkbox);
        taskList.appendChild(li);
    });
    tasksDiv.appendChild(taskList);

}