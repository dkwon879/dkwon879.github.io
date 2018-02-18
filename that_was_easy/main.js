function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();

}
function sayThatWasHard() {
    var thatWasHard = new Audio("That was hard.mp3");
    thatWasHard.play();

}
$("#easy").on("click", sayThatWasEasy);
$("#Hard").on("click", sayThatWasHard);
$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.charCode == 32) {
        $("#easy").trigger("click");
    }
}
