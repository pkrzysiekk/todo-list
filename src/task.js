export class Task{
    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description;
        this.dueDate=new Date(dueDate);
        this.priority=priority;
        this.isDone=false;
    }
    setDone(){
        this.isDone=true;
        
    }
    
}