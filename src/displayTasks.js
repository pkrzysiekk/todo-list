import { clearElement } from "./clearElement";

export function displayTasks(project){
    const taskList=document.createElement("ul");
    const tasksDiv=document.querySelector(".tasks");
    clearElement(tasksDiv);
    clearElement(taskList);
    project.projectTasks.forEach(task => {
        const li=document.createElement("li")
        li.innerHTML = `${task.title} Due Date: ${task.dueDate} <br> ${task.description}`;
        li.classList.add(task.priority);
        taskList.appendChild(li);
    });
    tasksDiv.appendChild(taskList);

}