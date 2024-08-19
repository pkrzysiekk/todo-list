import { Task } from "./task";

export class Project{
    constructor(title){
        this.title=title;
        this.projectTasks=[];
    }
    addToProject(task){
        this.projectTasks.push(task);
    }
   
}