import { displayTasks } from "./displayTasks";

export function changeTaskStatus(e,task){
    const li=e.target.parentElement;
  
    if(task.isDone===false){
        task.isDone=true;
        li.classList.add("task-done");
    }
    else{
        task.isDone=false;
        li.classList.remove("task-done");
    }
    
  

}