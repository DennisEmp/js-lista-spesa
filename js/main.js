const listaspesa=["salame", "mozzarella", "acqua","farina" ]
let container=document.querySelector(".lista");

let addBtn=document.getElementById("add");

addBtn.addEventListener("click",
function(){
    let nuovo=prompt("Nuovo Prodotto")
    listaspesa.push(nuovo)
    container.innerHTML+=`<div class="lista"> <input type="checkbox" name="" id=""> <span class="taskname"> ${nuovo}</span>`
})

i=0

while (i < listaspesa.length) {
    container.innerHTML+=
    `<div class="lista"> <input type="checkbox" name="" id=""> <span class="taskname"> ${listaspesa[i]}</span>`
    i++;
  }