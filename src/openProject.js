import { projectList } from "./projectList";
import { clearElement } from "./clearElement";
export function openProject(e){
    const button=e.target;
    const projectName=button.textContent;
    const mainDiv=document.querySelector("#main")
    let index=_.findIndex(projectList,function (project){ return project.title===projectName});
    const titleDiv=document.querySelector(".title");
    const titleSpan=document.createElement("span");
    clearElement(titleDiv);
    let projectToDisplay=projectList[index];
    titleSpan.textContent=projectToDisplay.title;
    titleDiv.appendChild(titleSpan);

}