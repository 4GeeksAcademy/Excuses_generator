const $button = document.getElementById("reload")
const $phraseContainer = document.getElementById("phraseContainer")

/* Excuses */

let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

/* Number */

const numGenerator = (arr)=>{
    let length = arr.length;
    let number = Math.floor(Math.random()*length)
    return number
  }

/* Generator */

const phraseGenerator = ()=>{
    let phrase = who[numGenerator(who)]+" "+action[numGenerator(action)]+" "+what[numGenerator(what)]+" "+ when[numGenerator(when)]
    $phraseContainer.innerHTML=phrase
    
  ;
}


/* Actions */

$button.addEventListener ("click",()=>{
  location.reload()
})


phraseGenerator()