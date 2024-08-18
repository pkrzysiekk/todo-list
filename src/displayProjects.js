import { clearElement } from "./clearElement"
import { projectList } from "./projectList";
export function displayProjects(){
    const buttonsDiv=document.querySelector(".buttons");
    clearElement(buttonsDiv);
   projectList.forEach((project)=>{
    const projectButton=document.createElement("button");
    projectButton.textContent=project.title;
    buttonsDiv.appendChild(projectButton);
   })

}