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

// Cancel/Notes button
const cancel = document.querySelector('.cancel')
const newnote = document.querySelector('.new')
let vischeck = []

function toggleVis() {
    var mode = document.querySelectorAll(".toggleSelector");
    for (let i = 0; i < mode.length; i++) {
    mode[i].classList.add('togVisibility')
    }
    document.querySelector('#story').innerHTML = 'This is a placeholder'
    vischeck.push(0)
}

function newNote() {
    if (vischeck.length === 1) {
        var mode = document.querySelectorAll(".toggleSelector");
        for (let i = 0; i < mode.length; i++) {
        mode[i].classList.remove('togVisibility')
        vischeck.pop()
        }
    }
    else if (vischeck.length === 0) {
        document.querySelector('#story').innerHTML = 'I have cleared your work space but you may want to hold backspace for a minute because I put this message in the way to confirm that I have in fact just cleared the text that you had put in this box before. This may be slightly annoying to clear each time you make a new note, but how else would you know that I have just cleared what you had before and it was not just some wild coincidental error that had occurred. This is the conclusion of the confirmation message. I hope you have a wonderful day and continue using Take Better Notes to improve your daily note taking and life in general. And now this is the real conclusion to the message, happy typing.';
    }
}

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

}
// - Should be similar to saving with the way I check elements, but instead use
// inner to update the textarea not save it.
// - Not entirely sure how to use notes title as button if they are being updated.

mode.addEventListener("click", changeMode);
cancel.addEventListener("click", toggleVis);
newnote.addEventListener("click", newNote)
save.addEventListener("click", saveNote);
load.addEventListener("click", loadNote);