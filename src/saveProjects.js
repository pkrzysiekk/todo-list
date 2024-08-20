import { projectList } from "./projectList";

export function saveProjects(){
    let projectsJSON=JSON.stringify(projectList);
    localStorage.setItem('projects',projectsJSON);

}