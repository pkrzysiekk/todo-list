import "./styles.css";
import { getNewProject } from "./getNewProject";

const addProjectButton=document.querySelector("#add");

addProjectButton.addEventListener("click",getNewProject);