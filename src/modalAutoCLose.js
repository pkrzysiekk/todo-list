
export function modalAutoClose(e,taskModal){
    const dialogDimensions = taskModal.getBoundingClientRect()
   
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      taskModal.close()
    }
}