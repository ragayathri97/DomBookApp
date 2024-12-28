const baseUrl='https://dent-clover-bottom.glitch.me/';

async function fetchData(url){
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error('HTTP erro! status: ${response.status}');
        }
        catch(error) {
            displayError('Failed to fetch data: ${error.message}');
            throw error;
        }
    }

    function displayError(message){
        const errorDiv=document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.textContent=message;
        document.getElementById('app').appendChild(errorDiv)
    }
}