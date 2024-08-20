import { clearElement } from "./clearElement";

export function clearMain(){
    const title=document.querySelector(".title");
    const projectHeader=document.querySelector(".project-header");
    const tasksDiv=document.querySelector(".tasks");
    const taskButtonDiv=document.querySelector(".Task-button");
    const addTaskButton=document.querySelector(".add-task");
    
    addTaskButton.remove();
    clearElement(title);
    clearElement(projectHeader);
    clearElement(tasksDiv);
    clearElement(taskButtonDiv);
  
   
}