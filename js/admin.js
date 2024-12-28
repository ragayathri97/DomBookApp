const addBookForm=document.getElementById('addBookForm');
const titleInput=document.getElementById('title');
const authorInput=document.getElementById('author');
const categorySelect=document.getElementById('category');
const errorMessage=document.getElementById('errorMessage');

//add
const title= titleInput.value;
const author= authorInput.value;
const category= categorySelect.value;
const newBook={
    title:title,
  author: author,
  category: category,
  isAvailable: true,
  isVerified: false,
  borrowedDays: null,
  imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
};

try{
    const response=await fetchData(`${baseUrl}`,)
}