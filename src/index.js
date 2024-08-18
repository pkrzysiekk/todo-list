import "./styles.css";
import { showTaskModal } from "./showTaskModal";
import { modalAutoClose } from "./modalAutoCLose";
import { showModalProject } from "./showModalProject";
import { projectFormSubmit } from "./projectFormSubmit";
import { addNewTask } from "./addNewTask";
var _ = require('lodash')
const addProjectButton=document.querySelector("#add-project-button");
const submitProjectButton=document.querySelector("#add-new-project");
const taskModal=document.querySelector("#task-modal");
const projectModal=document.querySelector("#project-modal")





addProjectButton.addEventListener("click",showModalProject);
submitProjectButton.addEventListener("click",e=>projectFormSubmit(e))
taskModal.addEventListener("click",(e)=>modalAutoClose(e,taskModal));
projectModal.addEventListener("click",(e)=>modalAutoClose(e,projectModal))
