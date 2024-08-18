
export function displayProject(project){
    const titleDiv=document.querySelector(".title");
    const titleSpan=document.createElement("span");
    const mainDiv=document.querySelector("#main")
    titleSpan.textContent=`Project ${project.title}`;
    titleDiv.appendChild(titleSpan);


}