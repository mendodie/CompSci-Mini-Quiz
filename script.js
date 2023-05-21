
let guess ='';
let guesses = 1;
let question = "";
let guessNumber = '';
let prevoius = '';
let full = '';
let question1 = "What is the name of the number system computer's use?"
let question2 = "What is the name of the search method that repeatedly divides the list in half until item found?"
let question3 = "";
let question4 = "";
let question5 = "";
let question6 = "";
let answer1 = "BINARY"
let answer2 = "BINARY_SEARCH"
let answer3 = "";
let answer4 = "";
let answer5 = "";
let answer6 = "";
let whichQuestion = 1;
let xyz = '';
function reset(){
  textField = document.getElementById('textInput1')
  textField.value = '';
  textField.style.backgroundColor = "white";
  textField = document.getElementById('textInput2')
  textField.value = '';
  textField.style.backgroundColor = "white";
  textField = document.getElementById('textInput3')
  textField.value = '';
  textField.style.backgroundColor = "white";
  textField = document.getElementById('textInput4')
  textField.value = '';
  textField.style.backgroundColor = "white";
  textField = document.getElementById('textInput5')
  textField.value = '';
  textField.style.backgroundColor = "white";
  textField = document.getElementById('textInput6')
  textField.value = '';
  textField.style.backgroundColor = "white";
  
}
function questionNumber(x){
  if(x === 1){
    return question1;
  }else if(x === 2){
    return question2;
  } else if(x === 3){
    return question3;
  }else if(x === 4){
    return question4;
  }else if(x === 5){
    return question5;
  }else{
    return question6;
  }
}
function guessesNumbers(x){
  if(x === 1){
    guessNumber = 'textInput1'
  }else if(x === 2){
    guessNumber = 'textInput2'
  }else if(x === 3){
    guessNumber = 'textInput3'
  }else if(x === 4){
    guessNumber = 'textInput4'
  }else if(x === 5){
    guessNumber = 'textInput5'
  }else if(x === 6){
    guessNumber = 'textInput6'
  }
  return guessNumber;
}
function changeValue(input) {
  if(guesses < 7){
  guessNumber = guessesNumbers(guesses);
  textField = document.getElementById(guessNumber);
  prevoius = full;
  guess = document.getElementById(input).value;
  question = questionNumber(whichQuestion)
  document.getElementById('questions').innerHTML = full;
  if(guess === '&larr'){
    prevoius = full.substring(0, full.length - 1)
    full = prevoius
    textField.value = prevoius

  }else if(guess === 'Enter'){
    textField.value = textField.value
    if(full.includes('%nbsp;')){
      full = replace(full);
    }
    xyz = check(full,whichQuestion)
    if(xyz === true){
      textField.value = "Correct!"
      guesses = 1;
      delay()
    }else if(full.length >= 1 && xyz === false){
    textField.style.backgroundColor = "red";
    full = ''
    guesses += 1;
    } else{
      guesses = guesses
    }
  }else if(guess === "&nbsp"){
    full += "\\";
    textField.value += "\\";
  }else{
  full = full + guess;
  textField.value += guess
  }
}
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function check(gus,num){
  if (num === 1 && gus === answer1){
    whichQuestion += 1;
    return true;
  }   if (num === 2 && gus === answer2){
    whichQuestion += 1;
    return true;
  }   if (num === 3 && gus === answer3){
    whichQuestion += 1;
    return true;
  }   if (num === 4 && gus === answer4){
    whichQuestion += 1;
    return true;
  }   if (num === 5 && gus === answer5){
    whichQuestion += 1;
    return true;
  }   if (num === 6 && gus === answer6){
    return true;
  } else{
    return false;
  }
}

async function delay(){
  textField.style.backgroundColor = "green";
  textField.value = "Correct!"
  await sleep(2000);
  full = '';
  prevoius = '';
  reset()
}
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
function replace(x){
  xy = x.indexOf('&nbsp;')
  x1 = x.substring(0, xy - 1)
  x2 = x.substring(xy + 1, x.length)
  x = x1.concat('_', x2)
  return x;
}