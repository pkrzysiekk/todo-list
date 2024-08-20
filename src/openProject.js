import { projectList } from "./projectList";
import { clearElement } from "./clearElement";
import { displayProject } from "./displayProject";
import { displayTasks } from "./displayTasks";
import { deleteProject } from "./deleteProject";
export function openProject(e){

    const button=e.target;
    const projectName=button.textContent;
    const titleDiv=document.querySelector(".title");
    const deleteProjectButton=document.createElement("button");
    deleteProjectButton.classList.add("delete-project-button");
    deleteProjectButton.textContent="Delete Project";

    let index=_.findIndex(projectList,function (project){ return project.title===projectName});
    let projectToDisplay=projectList[index];
    clearElement(titleDiv);
    titleDiv.textContent=projectName;
    titleDiv.appendChild(deleteProjectButton);
    deleteProjectButton.addEventListener("click",()=>deleteProject(projectName));
    displayProject(projectToDisplay);
    displayTasks(projectToDisplay);



}