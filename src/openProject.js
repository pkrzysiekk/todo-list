import { projectList } from "./projectList";
import { clearElement } from "./clearElement";
import { displayProject } from "./displayProject";
export function openProject(e){
    const button=e.target;
    const projectName=button.textContent;
    const titleDiv=document.querySelector(".title");
    let index=_.findIndex(projectList,function (project){ return project.title===projectName});
    let projectToDisplay=projectList[index];
    clearElement(titleDiv);
    displayProject(projectToDisplay);


}