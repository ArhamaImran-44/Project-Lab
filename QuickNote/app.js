let addBtn = document.querySelector(".addBtn");
let cancelBtn = document.querySelector(".cancel");
let note = document.querySelector(".note");
let list = document.querySelector(".list");

let count = 1;

addBtn.addEventListener("click", function () {

  if (note.value.trim() === "") {
    alert("Please write a note");
    return;
  }

  list.innerHTML += `
    <div class="listCard">
      <h3>Note ${count}</h3>
      <p>${note.value}</p>

      <button class="edit" onclick="edit(event)">Edit</button>
      <button class="dlt" onclick="dlt(event)">Delete</button>
    </div>
  `;
  count++;
  note.value = "";
});

// Cancel
cancelBtn.addEventListener("click", function () {
  note.value = "";
});

// Edit
function edit(event){
  let text = event.target.parentNode.children[1];

  let updated = prompt("Edit note", text.innerHTML);

  if(updated !== null && updated.trim() !== ""){
    text.innerHTML = updated;
  }
}

// Delete
function dlt(event){
  event.target.parentNode.remove();
}