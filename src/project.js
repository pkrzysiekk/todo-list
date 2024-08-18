import { Task } from "./list";

export class Project{
    constructor(title){
        this.title=title;
        this.projectList=[];
    }
    addToProject(task){
        this.projectList.push(task);
    }
    get taskList(){
        return this.projectList;
    }
}