// Dark/Light mode
const mode = document.getElementById('mode')

function changeMode () {
    var check = document.querySelector('.dark').innerHTML;
    if (check === 'Dark Theme') {
        var mode = document.querySelectorAll(".modeSelector");
        for (let i = 0; i < mode.length; i++) {
        mode[i].classList.add('darkmode')
        }
    document.querySelector('.dark').innerHTML = "Light Theme";
    }
    if (check === 'Light Theme') {
        var mode = document.querySelectorAll(".modeSelector");
        for (let i = 0; i < mode.length; i++) {
        mode[i].classList.remove('darkmode')
        }
    document.querySelector('.dark').innerHTML = "Dark Theme";
    }
}
// - When button is pressed toggle off original all colors (or class might be easier)
// - add new colors above oringinal to make them the default, uses cascading, 
//  This is done in the css not js

// Cancel/Notes button
// - On button click toggle visibility of relevant elements.
// - Could only find how to toggle visibilty by id, 
//   may have to restructure index or find new solution

//Save button
let notesArray = []
const save = document.getElementById('save')

function saveNote() {
    let name = prompt('Enter a name for your note')
    let list = document.querySelector('ul')
    let textSelect = document.getElementById('story')
    let text = textSelect.innerHTML
    let newitem = document.createElement("li");
    let noteName = document.createTextNode(name);
    newitem.appendChild(noteName);
    list.appendChild(newitem);
    notesArray.push({title: name, body: text});
}

//Load notes
const load = document.querySelector('ul')

function loadNote() {
    // let name = 'Milkers'
    // for (let note of notesArray){
    document.querySelector('#story').innerHTML = 'x';
        
    // }
}
// - Should be similar to saving with the way I check elements, but instead use
// inner to update the textarea not save it.
// - Not entirely sure how to use notes title as button if they are being updated.

mode.addEventListener("click", changeMode);
save.addEventListener("click", saveNote);
load.addEventListener("click", loadNote);