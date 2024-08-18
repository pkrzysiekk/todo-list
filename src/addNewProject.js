import { Project } from "./project"
import { projectList } from "./projectList";
import { displayProjects } from "./displayProjects";
export function addNewProject(title){
    const project=new Project(title);
    projectList.push(project);
    console.log(projectList);
    displayProjects();
    //tutaj coś do odświeżenia widoku projektów po dodaniu

}