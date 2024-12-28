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
async function borrowBook(bookId){
    const borrowingDays=prompt("Enter borrowingDays (max 10 days):","");
    if(borrowingDays && !isNaN(borrowingDays) && borrowingDays <=10){
        try{
            const response=await fetchData(`${baseUrl}/${bookId}`,{
                method:'PATCH',
                headers:
                {'content-Type':'application/json'},
                body:JSON.stringify({
                    isAvailable:false,
                    borrowedDays:
                    parseInt(borrowingDays)
                })
            });
            if(response.ok){
                alert("Book Borrowed Sucessfully!");
                showAvailableBooks();
            }
        }
    catch(error){
        displayError('Failed to borrow book.');
    }
}
else{
    alert("Invalid input for borrowing days.")
}
}


//return
async function returnBook(bookId){
    if(window.confirm('Are you sure to return the book?')){
        try{
            const response=await fetchData(`${baseUrl}/${bookId}`,{
                method:'PATCH',
                headers:
                {
                    'content-Type':'application/json'
                },
                body:JSON.stringify({
                    isAvailable:true,
                    borrowedDays:null
                    })
            });
             if(response.ok){
                alert("Book Returned Sucessfully!");
                showAvailableBooks();
            }
        }
    catch(error){
        displayError('Failed to return book.');
        }
    }
            }
    showAvailableButton.addEventListener('click',showAvaliableBooks);
    showBorrowedButton.addEventListener('click',showBorrowedBooks);
    showAvaailableBooks();