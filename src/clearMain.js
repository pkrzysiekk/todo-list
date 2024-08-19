
export function clearMain(){
    const mainDiv=document.querySelector("#main");
  
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}