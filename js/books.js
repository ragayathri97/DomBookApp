const showAvailableButton = document.getElementById('showAvailableButton');
const showBorrowButton = document.getElementById('showBorrowButton');

async function showAvailableBooks() {
    try {
        const availableBooks = await fetchData(`${baseUrl}?isAvailable=true`);
        const bookGrid = document.createElement('div')
        bookGrid.classList.add('book-grid');
        availableBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
            <img src="${book.imageUrl}" alt="Book Cover" 
            style="width:100px";">
            <h3>${book.title}</h3>
<p>Author:${book.author}</p>
<p>Category:${book.category}</p>
<button onclick="borrowBook(${book.id})">Borrow Book</button>
`;
bookGrid.appendChild(bookCard);
        });
        document.getElementById('app').innerHTML='';
        document.getElementById('app').appendChild(bookGrid);
    }
    catch(error){
        displayError('Failed to load available books.')
    }
}

async function showBorrowedBooks() {
    try {
        const allBooks = await fetchData(`${baseUrl}`);
        const borrowedBooks = allBooks.filter(book=>!book.isAvailable);
        const bookGrid= document.createElement('div');
        bookGrid.classList.add('book-grid');
        borrowedBooks.forEach(book=>{
            const bookCard=document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML=`
             <img src="${book.imageUrl}" alt="Book cover"
    style="width: 100px;">
    <h3>${book.title}</h3>
    <p>Author:${book.author}</p>
    <p>Category:${book.category}</p>
    <button onclick="returnBook(${book.author})">Return</button>
    `;
bookGrid.appendChild(bookCard);
        });

        document.getElementById('app').innerHTML='';
        document.getElementById('app').appendChild(bookGrid);
    }
    catch(error){
        displayError('Failed to load borrowed books.');
    }
}

//borrow
async