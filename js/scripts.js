/*
Groceries
Create a form that allows a user to input items they need at the store.
When the user submits the form, hide the form and display the list of items in alphabetical order, all uppercased.
Hint: To do this, build an array of the inputted items. (Make sure you don't include any blank fields.) Sort the array in alphabetical order. Make a new array with each entry uppercased (don't just uppercase them when you display them). Then, display the sorted list of things as list items inside a <ul>.

Explore the arrays entry of the Mozilla Developer Network JavaScript documentation to research what method might be used to sort arrays.
*/

$(document).ready(function(){
  $("form#fieldInputs").submit(function(event) {
    $("#fieldInputs").toggle();
    event.preventDefault();
    const item1 = ($("#item1").val());
    const item2 = ($("#item2").val());
    const item3 = ($("#item3").val());
    const item4 = ($("#item4").val());
    const item5 = ($("#item4").val());

    let input = [item1, item2, item3, item4, item5];

    $("input:input[type=text]:checked").forEach(function()  {
      $input.toUpperCase()
      console.log(input)
    });  
  });
});