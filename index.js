const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");

sendBtn.addEventListener('click', SMG)

function SMG(){
    let content = messageIn.value;
    if (content===''){
        alert('Please Enter Valid Value')
    }
    else{
    messageOut.innerHTML=content;
    messageIn.value='';
    }
}