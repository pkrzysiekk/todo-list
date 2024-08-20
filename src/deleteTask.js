import { displayTasks } from "./displayTasks";

export function deleteTask(project,task){
    let index = project.projectTasks.findIndex(t => t.title === task.title);
    let taskToDelete=project.projectTasks[index];
    _.remove(project.projectTasks,function(curr_task){ return curr_task===taskToDelete});
    displayTasks(project);

}