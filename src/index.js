import "./styles.css";
import { showTaskModal } from "./showTaskModal";
import { modalAutoClose } from "./modalAutoCLose";
import { showModalProject } from "./showModalProject";
const addProjectButton=document.querySelector("#add-project-button");
const taskModal=document.querySelector("#task-modal");
const projectModal=document.querySelector("#project-modal")

addProjectButton.addEventListener("click",showModalProject);
taskModal.addEventListener("click",(e)=>modalAutoClose(e,taskModal));
projectModal.addEventListener("click",(e)=>modalAutoClose(e,projectModal))
