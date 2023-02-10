const ButtonEl = document.getElementById('btn');
const containerEl = document.getElementById('image');


ButtonEl.onclick = async function() {
    const key = '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'
    const prompt = document.getElementById('input').value;
    const req = {
        prompt: prompt,
        size:'512x512'
        
    }
    // console.log(reqBody);

    const requests = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        },
        body: JSON.stringify(req)
    }

   const resp = await fetch('https://api.openai.com/v1/images/generations', requests)
   const fata = await  resp.json()
    console.log(fata)
    console.log(fata.data)
        const link = fata.data[0].url;
        containerEl.style.backgroundImage =`url(${link})`; 
    
        
        
}


