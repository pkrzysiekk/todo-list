import { clearElement } from "./clearElement";
import { clearMain } from "./clearMain";
import { displayProject } from "./displayProject";
import { displayProjects } from "./displayProjects";
import { projectList } from "./projectList";

export function deleteProject(name){
    let index=projectList.findIndex(p=>p.title===name);
    let projectToDelete=projectList[index];
    _.remove(projectList,function(curr_project) {return curr_project===projectToDelete});
    displayProjects();
    clearMain();
    console.log(index);
}