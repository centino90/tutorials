const myButton = document.getElementById('myButton')
const modalButtonClose = document.querySelectorAll('.modalButtonClose')

modalButtonClose.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const modalBody = document.getElementById('modalBody')
        const modalTable = modalBody.querySelector('table')
        modalTable.remove()
    })
})

myButton.addEventListener('click', function (event) {
    fetch('https://jsonplaceholder.typicode.com/todos').then(function(res) {
        return res.json()
    }).then(function(json){

        const todos = json.filter(function(item, index){
            if(index >= 10) {
                return false
            } else {
                return true
            }
        })
        const modalBody = document.getElementById('modalBody')
        const table = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                </tr>
            </thead>
            <tbody id="modalBodyTbody">            
            </tbody>
        </table>
        `
        modalBody.innerHTML += table
        const modalBodyTbody = modalBody.querySelector('#modalBodyTbody')
        for (let index = 0; index < todos.length; index++) {
            const todo = todos[index]
            const tr = `
            <tr>
                <td scope="row">${todo.title}</td>
            </tr>
            `
            modalBodyTbody.innerHTML += tr
        }
        const modalBodySpinner = modalBody.querySelector('#modalBodySpinner')
        modalBodySpinner.style.display = "none";
    })

    // $.get("https://jsonpwlaceholder.typicode.com/todos", function (data, status) {
    //     const todos = data.filter(function (item, index) {
    //         if (index >= 10) {
    //             return false
    //         } else {
    //             return true
    //         }
    //     })
    //     const modalBody = document.getElementById('modalBody')
    //     const table = `
    //     <table class="table">
    //         <thead>
    //             <tr>
    //                 <th scope="col">Title</th>
    //             </tr>
    //         </thead>
    //         <tbody id="modalBodyTbody">            
    //         </tbody>
    //     </table>
    //     `
    //     modalBody.innerHTML += table
    //     const modalBodyTbody = modalBody.querySelector('#modalBodyTbody')
    //     for (let index = 0; index < todos.length; index++) {
    //         const todo = todos[index]
    //         const tr = `
    //         <tr>
    //             <td scope="row">${todo.title}</td>
    //         </tr>
    //         `
    //         modalBodyTbody.innerHTML += tr
    //     }
    //     const modalBodySpinner = modalBody.querySelector('#modalBodySpinner')
    //     modalBodySpinner.style.display = "none";
    // });
})