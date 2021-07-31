 

const init=document.querySelector('form');
const word=document.querySelector('input');


const mpara=document.querySelector('#mpara');
const upara=document.querySelector('#upara');
const spara=document.querySelector('#spara');
const apara=document.querySelector('#apara');

init.addEventListener('submit',(e)=>{

    e.preventDefault();
    console.log('Working till here');
    console.log(word.value);

     mpara.textContent='Loading..';

            upara.textContent='Loading..';

            spara.textContent='Loading..';

            apara.textContent='Loading..';    

    fetch('/power?word='+word.value).then((response)=>{
        response.json().then((data)=>{
            mpara.textContent=data.def;

             upara.textContent=data.examples;

            spara.textContent=data.synonyms;

            apara.textContent=data.antonyms;
        })
    })
})