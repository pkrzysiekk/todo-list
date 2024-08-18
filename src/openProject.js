import { projectList } from "./projectList";

export function openProject(e){
    const button=e.target;
    const projectName=button.textContent;
    let index=_.findIndex(projectList,function (project){ return project.title===projectName});
    console.log(index);
}