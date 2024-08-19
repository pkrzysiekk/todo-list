import { titleParagraphContent } from "./titleParagraphContent";
import { showTaskModal } from "./showTaskModal";
import { addNewTask } from "./addNewTask";
import { clearElement } from "./clearElement";
export function displayProject(project){
    const projectHeader=document.querySelector(".project-header");
    const addTaskButton=document.createElement("button");
    const addTaskButtonDiv=document.querySelector(".Task-button");

    clearElement(addTaskButtonDiv);
    projectHeader.textContent=titleParagraphContent;
    addTaskButton.classList.add("add-task");
    addTaskButton.textContent="+";
    addTaskButton.removeEventListener("click",showTaskModal);
    addTaskButton.addEventListener("click",showTaskModal);
    addTaskButtonDiv.appendChild(addTaskButton);

    const submitTaskButton=document.querySelector("#add-new-task");

    //removing any other listener from previous clicking,fucked up
    const newSubmitTaskButton = submitTaskButton.cloneNode(true);
    submitTaskButton.parentNode.replaceChild(newSubmitTaskButton, submitTaskButton);

 
    newSubmitTaskButton.addEventListener("click", (e) => addNewTask(e, project));
}

