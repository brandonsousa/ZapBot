const formContato = document.querySelector('.form-contato');
const containerList = document.querySelector('.list');
formContato.addEventListener("submit", e => {
    e.preventDefault();
    fetch('/contact', {
        method:"POST",
        body: new FormData(formContato)
        //body: JSON.stringify({name: document.querySelector('.contato').value})
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
})

let templeite = " ";
fetch('/contact')
.then(response => response.json())
.then(response => {
    response.forEach(e => {
        
         templeite += 
                    `<div class="item-list">
                        <input type="text" class="input" disabled value="${e.name}">
                        <button class="button-remove" data-id="${e.id}">X</button>
                    </div>`
    });


    document.querySelector('.list').innerHTML += templeite;
})