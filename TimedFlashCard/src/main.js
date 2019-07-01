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
    let score = 0;
    let userInput = $('.answer').val();
    let computerAnswer = currentFlashCard.computerAnswer();
    if (userInput === computerAnswer) {
      score += 1;
    } else {
      score -= 1;
    }
    $("#score").text(score);
  });
});
