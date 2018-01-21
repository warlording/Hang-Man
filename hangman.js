 
  var categories;        
  var chosenCategory;    
  var word ;            
  var guess ;           
  var guesses = [ ];      
  var lives ;            
  var counter ;          
  var space;              
  var userGuess = [];          
  var acceptInput = true  

  var accepted = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ' '];

  
  var showLives = document.getElementById("mylives");
  var userGuessSection = document.getElementById("userGuess");
  var gameImage = document.getElementsByClassName("gameImage");
  var wordHolder = document.getElementById('hold');

function loadFunction() {
  
  
  function userEvent(){
    document.onkeyup = function(event) {
      var guess = String.fromCharCode(event.keyCode).toLowerCase();
      if(accepted.includes(guess)){
        if(userGuess.indexOf(guess) == -1){
          if(acceptInput){
            for (var i = 0; i < word.length; i++) {
              
              if (word[i] === guess) {
                  guesses[i].innerHTML = guess;
                  counter += 1;
                  }
            }
              var j = (word.indexOf(guess));
              if (j === -1) {
                lives -= 1;
                comments();
              } else {
                comments();
                }
              userGuess.push(guess);
              console.log(userGuess);
              userGuessSection.innerHTML = userGuess; 
          }
        }
      }
    }
  }
  userEvent();
  play();

}
 

 

 
  function result() {
   
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }



  
   comments = function () {
    showLives.innerHTML = "You have " + lives + " guesses remaining";
    if (lives < 1) {
      showLives.innerHTML = "I'm not suprised you lost. Refresh to humiliate yourself again.";
      acceptInput = false;

    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "Holy shit, you got it! Rock On!";
        acceptInput = false;
      }
    }
  }


  play = function () {
    categories = ["roadie", "tribute", "beelzeboss", "master exploder", "fuck her gently", "the metal", "explosivo", "to be the best", "rize of the fenix", "deth starr"];

    word = categories[Math.floor(Math.random() * categories.length)];
    word = word.replace(/\s/g, " ");
    console.log(word);

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
  }



 function resetButton(){
  userGuess.length = 0;
  acceptInput = true;
  var wordUl = document.getElementById("my-word");

  function removeUl() {
      wordUl.parentNode.removeChild(wordUl);
  }

  removeUl();
  play();

}