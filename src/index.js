import "./styles.css";
import { showTaskModal } from "./showTaskModal";
import { modalAutoClose } from "./modalAutoCLose";
const addProjectButton=document.querySelector("#add-project-button");
const taskModal=document.querySelector("#task-modal");

addProjectButton.addEventListener("click",showTaskModal);
taskModal.addEventListener("click",(e)=>modalAutoClose(e,taskModal));
