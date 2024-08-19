import { displayTasks } from "./displayTasks";
import { Task } from "./task";
export function addNewTask(e,project){

    e.preventDefault();
    let title=document.getElementById("ftitle").value;
    let description=document.getElementById("fdesc").value;
    let dueDate=document.getElementById("fdate").value;
    let priority=document.getElementById("fpriority").value;

    let task=new Task(title,description,dueDate,priority);
    project.addToProject(task);
    displayTasks(project);
    


}