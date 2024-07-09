
function addBook() {
    var authorInput = document.getElementById('author').value.trim();
    var titleInput = document.getElementById('title').value.trim();

    if (authorInput === '' || titleInput === '') {
        alert('Please enter both author and title.');
        return;
    }

    var currentDate = new Date().toLocaleDateString();


    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${authorInput}</td>
        <td>${titleInput}</td>
        <td>${currentDate}</td>
    `;


    var tableBody = document.getElementById('book-list-body');
    tableBody.appendChild(newRow);


    var book = {
        author: authorInput,
        title: titleInput,
        date: currentDate
    };


    var books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);


    localStorage.setItem('books', JSON.stringify(books));


    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
}


function loadBooks() {
    var books = JSON.parse(localStorage.getItem('books')) || [];

    var tableBody = document.getElementById('book-list-body');
    tableBody.innerHTML = ''; 

    
    books.forEach(function(book) {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.date}</td>
        `;
        tableBody.appendChild(newRow);
    });
}


loadBooks();