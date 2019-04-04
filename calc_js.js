function clearAll() {
  document.getElementById("result").value = ""; // changes the value of the form to null
}
function add(data) {
  document.getElementById("result").value += data; // adds the data that was sent (the id of the button)
}                                                 //  to the the form
function calc() {
  try {
    var p = eval(document.getElementById("result").value);
    document.getElementById("result").value = Math.round(p * 100000) / 100000; // calculates the input
  }                                                                           // of the form and prints it with
                                                                              // 5 decimal places
  catch (errors) {
    document.getElementById("result").value = "Error"; // if there was an undefined calculation, "Error"
  }                                                    // is displayed
}
function del() {
  var newStr = (document.getElementById("result").value).substr(0, (document.getElementById("result").value).length-1);
  document.getElementById("result").value = newStr;
  // The function removes the last character from the string and
  // inputs it into the form
}
