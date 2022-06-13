let display= document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
button.addEventListener('click' , (e) => {
switch(e.target.innerText){
    case'DEL':
    display.innerText = '';
    break;
    case'Reset':
    if(display.innerText){
    display.innerText= display.innerText.slice(0 , -1);
    }
    break;
    case'=':
    try{
    display.innerText= eval(display.innerText);}
    catch{
        display.innerText=('Error');
    }
    break;

  default: 
  display.innerText += e.target.innerText;
 
}
}) 
let two=document.getElementById('two');
		two.addEventListener('click',function(){
			let body=document.querySelector('body');
			let toggle=document.getElementById('circle');
			body.classList.add('active1');
			body.classList.remove('active2');
			toggle.style.left='36%';
		})
		let one=document.getElementById('one');
		one.addEventListener('click',function(){
			let body=document.querySelector('body');
			let toggle=document.getElementById('circle');
			body.classList.remove('active1');
			body.classList.remove('active2');
			toggle.style.left='0';
		})
		let three=document.getElementById('three');
		three.addEventListener('click',function(){
			let body=document.querySelector('body');
			let toggle=document.getElementById('circle');
			body.classList.add('active2');
			body.classList.remove('active1');
			toggle.style.left='65%';
		}) });  

    