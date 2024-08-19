import { clearElement } from "./clearElement";

export function displayTasks(project){
    const taskList=document.createElement("ul");
    const tasksDiv=document.querySelector(".tasks");
    clearElement(tasksDiv);
    clearElement(taskList);
    project.projectTasks.forEach(element => {
        const li=document.createElement("li")
        const liContext=element.title;
        li.textContent=liContext;
        taskList.appendChild(li);
    });
    tasksDiv.appendChild(taskList);

}