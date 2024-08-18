import { addNewProject } from "./addNewProject";
import { projectSubmitValid } from "./projectSubmitValid";
export function projectFormSubmit(e){
    e.preventDefault()
    const titleField=document.getElementById("project-title")
    let projectTitle=document.getElementById("project-title").value;
    if(projectSubmitValid(projectTitle)){
        titleField.value='';
        addNewProject(projectTitle);
    }
}