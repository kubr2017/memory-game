/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function createCardsArray(n){
  var symbolsArray['diamond','paper-plane-o','anchor','bolt','cube','leaf','bicycle','bomb'];
  var cardsArray[];
  var j=0;
  for (var i = 0; i < n*n-1; i++) {
    cardsArray[i]="<li class=&#34card&#34><br><i class=&#34fa fa-"+symbolsArray[j]+"></i><br></li>";
    j++;
    if (j==7){
      j=0;
    }

  }
  shuffle(cardsArray);
  return cardsArray;
}

function createDeck(array){
  var deck = document.getElementsByClassName("deck");
  var fragment;
  for (var i=0;i<array.length;i++) {
    fragment = fragment+array[i];
  }
  deck.appendChild(fragment);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
