const loginForm=document.getElementById('loginForm');
const emailInput=document.getElementById('email');
const errorMessage=document.getElementById('errorMessage');


//Handle-Submission
loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const email=emailInput.value;
    const password=passwordInput.value;
     
//check admin
if(email==='admin@empher.com'&& password==='empher@123'){
    localStorage.setItem('loginData',JSON.stringify({
        email:'admin@empher.com'
    }));
    window.location.href='admin.html';
    alert ("Logged in as Admin.")
}
else if(email==='user@empher.com'&& password==='empher@123'){
    localStorage.setItem('loginData',JSON.stringify({
        email:'user@empher.com'}));
        window.location.href='books.html';
        errorMessage.textContent="Invalid email or password."
    }
})