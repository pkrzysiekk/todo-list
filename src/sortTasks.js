import { compareAsc, format } from "date-fns";
export function sortTasksByDate(project) {
    project.projectTasks.sort((taskA, taskB) => {
        const dateA = new Date(taskA.dueDate);
        const dateB = new Date(taskB.dueDate);
        return compareAsc(dateA, dateB);
    });
}