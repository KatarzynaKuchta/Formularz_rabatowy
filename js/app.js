const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
const name= document.querySelector('.textInputsContainer input:nth-child(2)');
const title2Name= document.querySelector('.title2Name');

form1.addEventListener('submit', function() {
    event.preventDefault();
    form1.style.display='none';
    form2.style.display='block';
    title2Name.innerText = name.value;
})