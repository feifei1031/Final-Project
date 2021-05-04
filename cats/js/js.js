let day = new Date().getDay(); 
console.log(day);
let reply;
let answer = document.getElementById('date');
console.log(answer);

if (day == 1) {
      reply = "Oh no, it's Monday :("
    } else   if (day == 2) {
        reply = "Happy Tuesday!"
    } else   if (day == 3) {
        reply = "Happy Wednesday!"
    } else   if (day == 4) {
        reply = "Happy Thursday!"
    } else   if (day == 5) {
        reply = "Friday! Almost the weekend!"
    } else   if (day == 6) {
        reply = "Happy CATurday!"
    } else   if (day == 0) {
        reply = "Sunday Funday!"
    } 
    console.log('Reply: ' + reply);
    answer.textContent = reply;


let btn = document.querySelector('button')
btn.addEventListener('click', dark)

function dark(){
    const background = document.querySelector('body'); 
    background.style.background = 'linear-gradient( rgb(33, 50, 80), rgb(115, 130, 161) )';
    background.style.color = 'white';

    let sleep= document. querySelector('footer');
    sleep.innerHTML= 'It is probably bedtime  Zz';
    sleep.style.color='black';
}


let hour = new Date().getHours();
if  (hour >= 20 || hour < 8) {
    btn.style.display = 'auto';
  } else {
    btn.style.display = 'none';}

let footer = document.querySelector('footer');
footer.addEventListener ('mouseover', thanks)

function thanks(){
    footer.innerText= 'Thanks for visiting :)';
    footer.style.color= 'black';
}