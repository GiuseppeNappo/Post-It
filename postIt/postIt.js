let count = 0;

function f() {

    let firstDiv = document.getElementById("FirstDiv");
    let r = Math.floor(Math.random() *255);
    let g = Math.floor(Math.random() *255);
    let b = Math.floor(Math.random() *255);

    let divtopbar = document.createElement("div");
    divtopbar.classList.add("topBar");
    divtopbar.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
    divtopbar.setAttribute("id",count.toString());

    r = r+20;
    g = g+20;
    b = b+20;
    let divform = document.createElement("div");
    divform.classList.add("form");
    divform.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";

    let divtext = document.createElement("div");
    divtext.classList.add("textArea");
    divtext.setAttribute("contenteditable", true);

    divtopbar.innerHTML=" <button  onclick=\"deletePostIt("+ count++ +")\">X</button>";

    firstDiv.appendChild(divtopbar);
    divtopbar.appendChild(divform);
    divform.appendChild(divtext);
}
function deletePostIt(i) {

    let ptr = document.getElementById(i);
    ptr.parentElement.removeChild(ptr);
}