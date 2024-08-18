
export function projectFormSubmit(e){
    e.preventDefault()
    const titleField=document.getElementById("project-title")
    let projectTitle=document.getElementById("project-title").value;
    titleField.value='';
    console.log(projectTitle);
    
}