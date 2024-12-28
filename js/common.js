const baseUrl='https://hip-lying-mongoose.glitch.me';

async function fetchData(url){
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error('HTTP erro! status: ${response.status}');
        }
        if(!response.ok){
            throw new Error(`HTTP error status:${response.status}`);
        }
        return await response.json();
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
