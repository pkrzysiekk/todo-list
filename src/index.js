import "./styles.css";
import { getNewProject } from "./getNewProject";
import { modalAutoClose } from "./modalAutoCLose";
const addProjectButton=document.querySelector("#add");
const modal=document.querySelector("#modal");

addProjectButton.addEventListener("click",getNewProject);
modal.addEventListener("click",modalAutoClose);
