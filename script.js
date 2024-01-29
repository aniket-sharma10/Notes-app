let notes_container = document.querySelector('.notes-container');
let notes_text = document.querySelector('.notes-text');
let add_note = document.querySelector('.create');


function getData(){
    notes_container.innerHTML = localStorage.getItem("notes")
}
getData();

function updateData(){
    localStorage.setItem("notes", notes_container.innerHTML);
}


add_note.addEventListener("click", ()=> {
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.className = "notes-text";
    p.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    notes_container.appendChild(p).appendChild(img);
})

notes_container.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateData();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.notes-text');
        notes.forEach(element => {
            element.onkeyup = function(){
                updateData();
            }
        });
    }
})

document.addEventListener("keydown", (e)=> {
    if(e.key === "Enter"){
        e.preventDefault();
        document.execCommand("insertLineBreak");
    }
})
