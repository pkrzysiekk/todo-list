import { titleParagraphContent } from "./titleParagraphContent";
export function displayProject(project){
    const titleDiv=document.querySelector(".title");
    const titleSpan=document.createElement("span");
    const mainDiv=document.querySelector("#main")
    const titleParaph=document.createElement("span");
    const tasksDiv=document.querySelector(".tasks");
    const addTaskButton=document.createElement("button");
    const addButtonDiv=document.createElement("div");
    addTaskButton.classList.add("add-task");
    addTaskButton.textContent="+";



    titleSpan.textContent=`Project ${project.title}`;
    titleParaph.textContent=titleParagraphContent;
    titleDiv.appendChild(titleSpan);
    mainDiv.appendChild(titleParaph);
    addButtonDiv.appendChild(addTaskButton);
    mainDiv.appendChild(addButtonDiv);


}