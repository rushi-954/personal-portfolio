// Typing Animation

const words = [
  "AIML Student",
  "Python Learner",
  "Web Developer",
  "Tech Enthusiast"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function type(){

  currentWord = words[i];

  if(isDeleting){

    typing.textContent =
    currentWord.substring(0, j-1);

    j--;

  }else{

    typing.textContent =
    currentWord.substring(0, j+1);

    j++;

  }

  if(!isDeleting && j === currentWord.length){

    isDeleting = true;

    setTimeout(type,1000);

    return;
  }

  if(isDeleting && j === 0){

    isDeleting = false;

    i++;

    if(i === words.length){
      i = 0;
    }
  }

  setTimeout(type, isDeleting ? 80 : 150);
}

type();


// Dark Light Theme

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.onclick = () => {

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }else{

    themeBtn.innerHTML =
    '<i class="fa-solid fa-moon"></i>';
  }

};