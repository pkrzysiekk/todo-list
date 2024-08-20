
import { displayProjects } from "./displayProjects";
import { Project } from "./project";
import { projectList } from "./projectList";
import { Task } from "./task";


export function loadProjectsFromLocalStorage() {
    const projectsJSON = localStorage.getItem('projects');

    if (projectsJSON) {
        const projects = JSON.parse(projectsJSON);

        projectList.length = 0; // 

        projects.forEach(project => {
            const newProject = new Project(project.title);

            project.projectTasks.forEach(task => {
                const newTask = new Task(task.title, task.description, task.dueDate, task.priority);
                newTask.isDone=task.isDone;
                newProject.addToProject(newTask);
            });

            projectList.push(newProject); 
        });
    } else {
        projectList.length = 0; 
    }
    displayProjects();
}
