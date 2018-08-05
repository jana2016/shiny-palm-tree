// List of cards - We use the full css class as an identifier here to
// make it easy to append li elements with the correct css class later.

let deck = ["fa fa-diamond",
            "fa fa-diamond",
            "fa fa-paper-plane-o",
            "fa fa-paper-plane-o",
            "fa fa-anchor",
            "fa fa-anchor",
            "fa fa-bolt",
            "fa fa-bolt",
            "fa fa-leaf",
            "fa fa-leaf",
            "fa fa-bicycle",
            "fa fa-bicycle",
            "fa fa-bomb",
            "fa fa-bomb",
            "fa fa-cube",
            "fa fa-cube",
];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// let's shuffle!
shuffle(deck);

// get the deck ul node
let ulNode=document.getElementById("deck");

// loop over the deck appending the new card to the ulNode
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
for (var i = 0; i < deck.length; i++) {
  let cardNode = document.createElement('li');
  cardNode.className = "card";
  let italicNode = document.createElement('i');
  italicNode.className = deck[i];
  cardNode.appendChild(italicNode);
  ulNode.appendChild(cardNode);
}
console.log (deck);
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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
*/
// Credit: Matthew Cranford walkthrough https://matthewcranford.com/memory-game-walkthrough-part-2-toggling-cards/
let cardDeck = document.querySelector('.deck');
cardDeck.addEventListener("click", event =>{
  const cardDeck = event.target;
  if(cardDeck.classList.contains('card')){
    cardDeck.classList.toggle('open');
    cardDeck.classList.toggle('show');
    }
    console.log (event)
});

  /* - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)/*
*/
let OpenCard=document.getElementsByClassName('card open show');
if (deck.length =<2) function MyFunction () {
  deck.push(OpenCard);
  document.getElementbyId ("deck")
console.log(deck)

 /*  - if the list already has another card, check to see if the two cards match
 //
    if OpenCardList=<2 push
  OpenCard =>
 let
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)

 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
