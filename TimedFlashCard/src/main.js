import './styles.css';
import { FlashCards } from './flashcards.js';


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
    currentFlashCard.scoreKeeper(userInput, computerAnswer);
    $("#score").text(currentFlashCard.score);
    setTimeout(function() {
      $('#keyword').load('#keyword');
      $('#value').load('#value');
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
