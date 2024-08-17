import { Task } from "./list";

export class Project{
    constructor(){
        this.projectList=[];
    }
    addToProject(task){
        this.projectList.push(task);
    }
    get taskList(){
        return this.projectList;
    }
}