import { titleParagraphContent } from "./titleParagraphContent";
import { showTaskModal } from "./showTaskModal";
import { addNewTask } from "./addNewTask";
export function displayProject(project){
    const titleDiv=document.querySelector(".title");
    const titleSpan=document.createElement("span");
    const mainDiv=document.querySelector("#main")
    const titleParaph=document.createElement("span");
    const tasksDiv=document.querySelector(".tasks");
    const addTaskButton=document.createElement("button");
    const addButtonDiv=document.createElement("div");
    addTaskButton.classList.add("add-task");
    addTaskButton.textContent="+";
    addTaskButton.addEventListener("click",showTaskModal);
    const taskForm=document.querySelector("#task-form");
    const submitTaskButton=document.querySelector("#add-new-task");
    submitTaskButton.addEventListener("click",(e)=>addNewTask(e,project));
    
    titleSpan.textContent=`Project ${project.title}`;
    titleParaph.textContent=titleParagraphContent;
    titleDiv.appendChild(titleSpan);
    mainDiv.appendChild(titleParaph);
    addButtonDiv.appendChild(addTaskButton);
    mainDiv.appendChild(addButtonDiv);


}