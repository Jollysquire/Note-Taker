// Dark/Light mode
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

// - Prompts users for input, which is used as key in the array.
// - Takes current text in text area and makes it value, this should be easy
//   using innerHTML and assigning the text to a variable.
// - Add key to notes list again using innerHTML imagine to update entire list 
//   with a for loop and adding each key every time, unless I can append.

//Load notes
// - Should be similar to saving with the way I check elements, but instead use
// inner to update the textarea not save it.
// - Not entirely sure how to use notes title as button if they are being updated.

save.addEventListener("click", saveNote);