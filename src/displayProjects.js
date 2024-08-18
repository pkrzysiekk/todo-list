import { clearElement } from "./clearElement"
import { projectList } from "./projectList";
import { openProject } from "./openProject";
export function displayProjects(){
    const buttonsDiv=document.querySelector(".buttons");
    clearElement(buttonsDiv);
   projectList.forEach((project)=>{
    const projectButton=document.createElement("button");
    projectButton.textContent=project.title;
    projectButton.addEventListener("click",(e)=>openProject(e));
    buttonsDiv.appendChild(projectButton);
   })

}