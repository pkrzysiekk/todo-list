import "./styles.css";
import { getNewTask } from "./getNewTask";
import { modalAutoClose } from "./modalAutoCLose";
const addProjectButton=document.querySelector("#add");
const taskModal=document.querySelector("#task-modal");

addProjectButton.addEventListener("click",getNewTask);
taskModal.addEventListener("click",(e)=>modalAutoClose(e,taskModal));
