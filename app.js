console.log("Let's get this party started!");

const giphyForm =document.querySelector('#giphy-form');
const userInput = document.querySelector('.user-input');
userInput.innerText=userInput.value;
const gifDiv=document.querySelector('.gif-div');
const gifUl=document.querySelector('gif-ul');
const gifSection=document.querySelector('section')
const removeBtn = document.querySelector('.remove')





const img=document.querySelector('#img')
 
  async function getRandomGiph(userInput){ 
    try{    
    const res = await axios.get("https://api.giphy.com/v1/gifs/search",{
        params: {
            api_key:"eSp4eENbT7m1Yhj0tFVt9OCTzbXqZ9V8",
          q: userInput         
        }
    })
    console.log(res);
    let resLength =res.data.data.length;
    let randomIdx =Math.floor(Math.random() * resLength);
    console.log(randomIdx);
    const newImageDiv=document.createElement('div'); 
    newImageDiv.setAttribute("class","positioning")    
    const newImg=document.createElement('img');     
    newImg.src=res.data.data[randomIdx].images.downsized_medium.url;
    newImageDiv.append(newImg);
    gifSection.append(newImageDiv);
}catch(err){
    console.log('Form Reset')
}
}



//form handler:

giphyForm.addEventListener('submit',function(e){
    e.preventDefault();
    getRandomGiph(userInput.value);
    userInput.value='';

})

//remove gifs

removeBtn.addEventListener('click',function(){
gifSection.remove();
section = '';
giphyForm.reset();
  

})



    





    
    
