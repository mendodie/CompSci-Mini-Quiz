
let guess ='';
let guesses = 1;
let question = "";
let guessNumber = '';
let prevoius = '';
let full = '';
let question1 = "What is the name of the number system computer's use?"
let question2 = "What is the name of the search method that repeatedly divides the list in half until item found?"
let question3 = "What is the name of the function that only returns True or False?";
let question4 = "What is the name of the numbering system with base-16?";
let question5 = "What is the name of the search method that goes through every element?";
let question6 = "What type of compression doesn't lose information when compressed?";
let question7 = "What type of compression does lose information when compressed?"
let answer1 = "BINARY"
let answer2 = "BINARY-SEARCH"
let answer3 = "BOOLEAN-Function";
let answer4 = "HEXADECIMAL";
let answer5 = "LINEAR-SEARCH";
let answer6 = "LOSSLESS-COMPRESSION";
let answer7 = "LOSSY-COMPRESSION"
let whichQuestion = 1;
let xyz = '';
let incorrect = 0;

//resets guesses
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

//checks what quesstion you're on
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
    
  }else if(x === 6){
    
    return question6;
    
  }
    
    return question7;
    
  
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
  if(guesses <= 7){
    
  guessNumber = guessesNumbers(guesses);
  textField = document.getElementById(guessNumber);
  prevoius = full;
  guess = document.getElementById(input).value;
  question = questionNumber(whichQuestion)
  document.getElementById('questions').innerHTML = question;
    
  if(guess === '&larr'){
    
    prevoius = full.substring(0, full.length - 1)
    full = prevoius
    textField.value = prevoius

  }else if(guess === 'Enter'){
    
    textField.value = textField.value
    xyz = check1(full,whichQuestion)
    whichQuestion = check2(full,whichQuestion)
    
    if(xyz === true){
      
      textField.value = "Correct!"
      guesses = 1;
      delay()
      
    }else if(full.length >= 1 && xyz === false){
      
    textField.style.backgroundColor = "red";
    full = ''
    guesses += 1;
      
    if(guesses === 7){
      
      textField.value = "Incorrect!"
      delay1()
      whichQuestion += 1
      guesses = 1

    }
    } else{
      
      guesses = guesses
      
    }
  }else{
    
  full += guess
  textField.value += guess
    
  }
}
}

function check1(gus,num){
  
  if (num === 1 && gus === answer1){
    
    whichQuestion += 1;
    return true;
    
  }else   if (num === 2 && gus === answer2){
    
    whichQuestion += 1;
    return true;
    
  }else   if (num === 3 && gus === answer3){
    
    whichQuestion += 1;
    return true;
    
  }else  if (num === 4 && gus === answer4){
    
    whichQuestion += 1;
    return true;
    
  }else   if (num === 5 && gus === answer5){
    
    whichQuestion += 1;
    return true;
    
  }else   if (num === 6 && gus === answer6){
    
    return true;
    
  } else if (num === 7 && gus === answer7){
    
    return true;
    
  }
    return false;
  
}
function check2(gus,num){
  
  if (num === 1 && gus === answer1){
    
    whichQuestion += 1;
    return whichQuestion;
    
  }else   if (num === 2 && gus === answer2){
    
    whichQuestion += 1;
    return whichQuestion;
    
  }else   if (num === 3 && gus === answer3){
    
    whichQuestion += 1;
    return whichQuestion;
    
  }else  if (num === 4 && gus === answer4){
    
    whichQuestion += 1;
    return whichQuestion;
    
  }else   if (num === 5 && gus === answer5){
    
    whichQuestion += 1;
    return whichQuestion;
    
  }else   if (num === 6 && gus === answer6){
    
    return whichQuestion;
    
  } 
    return whichQuestion;
  
}

async function delay(){
  
  textField.style.backgroundColor = "green";
  textField.value = "Correct!"
  
  await sleep(2000);
  
  full = '';
  prevoius = '';
  reset()
  
}
async function delay1(){
  
  textField.style.backgroundColor = "red";
  textField.value = "Incorrect!"
  
  await sleep(2000);
  
  full = '';
  prevoius = '';
  reset()
  
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
