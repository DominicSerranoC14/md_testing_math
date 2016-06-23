
//create reference to input
var userInput = $('#user-input');

//grabs first integer and operator
var grabOp = function() {

  // when a button is clicked the user input and operation selected is passed to another function which operates the function
  $('.op').click( function(each) {
    let num1 = parseInt(userInput.val());
    let op = $(this).html();
    runOp(op, num1);

    //sets text box back to an empty string on any click
    userInput.val("");
  });
}//end grabOp


//operates on enter press
var runOp = function(op, num1) {

  //event listener that listens for enter key
  $('#user-input').keyup( function() {
    //test is enter was pressed then function
    if ( event.keyCode === 13 ) {
      let num2 = parseInt(userInput.val());
      // console.log(typeof(op))
      userInput.val(window[op](num1, num2));
    }
  });
}////////end runOp


grabOp();
