import './styles.css';
import { FlashCards } from './flashcards.js';

let currentScore = 0; //this is global variable
$(document).ready(function() {
  let currentFlashCard = new FlashCards();
  let keyword = currentFlashCard.randomKeyword;
  let value = currentFlashCard.randomValue;
  $("#keyword").text(currentFlashCard.keywords[keyword]);
  $("#value").text(currentFlashCard.definitions[value]);

  $('.answer').click( function (event){
    event.preventDefault();
    let userInput = $(this).attr('id'); // $(this) refers to button that was clicked
    let computerAnswer = currentFlashCard.computerAnswer();
    currentScore = currentFlashCard.scoreKeeper(userInput, computerAnswer); //shouldn't start with let or var in order to maintain global variable.
    $("#score").text(currentScore);

    setTimeout(function(currentScore) {
      $("#score").text(currentScore);
      // $('#keyword').load('#keyword'); // somehow the .load() reload whole page rather than #keyword section
      // $('#value').load('#value'); // somehow the .load() reload whole page rather than #value section
      currentFlashCard.getRandomVals();
      $("#keyword").text(currentFlashCard.keywords[currentFlashCard.randomKeyword]);
      $("#value").text(currentFlashCard.definitions[currentFlashCard.randomValue]);

    }, 5000);
  });
});



// let reload = setInterval(startLoad, 3000);
// function startLoad() {
//   console.log("Today is so hard....");
//   $('#keyword').load('#keyword');
//   $('#value').load('#value');
// }
// function stopLoad() {
//   clearInterval(reload);
//   stopLoad();
// }
