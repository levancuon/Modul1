let store = new ProductManager();

function showAll() {
    let arr = store.findAll();
    let html =


        `<table border='1'>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>Action</th>
    </tr>
    `
    for (let i = 0; i < arr.length; i++) {
        html += `
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>Action</th>
    </tr>
        `
    }
    html += `</table>`
    document.getElementById('main').innerHTML = html;

}

showAll();


