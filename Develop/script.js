  //Creating a function to display the current date and time
  let renderClock = function(){
      document.getElementById("currentDay").innerHTML = `${moment().format('MMM Do YYYY, h:mm:ss a')}`;
  }

  //Calling functions for the date and time
  renderClock();
  setInterval(renderClock, 1000);

  var TextField9am = ("#TextField9am");
  var TextField10am = ("#TextField10am");
  var TextField11am = ("#TextField11am");
  var TextField12pm = ("#TextField12pm");
  var TextField1pm = ("#TextField1pm");
  var TextField2pm = ("#TextField2pm");
  var TextField3pm = ("#TextField3pm");
  var TextField4pm = ("#TextField4pm");
  var TextField5pm = ("#TextField5pm");


  //The function for the save button
  function saveButton() {
    var input = document.getElementById("TextField9am");
    localStorage.setItem("9AM", input.val());
    let myName = localStorage.getItem("9AM");
    myName
    //setting items in the local storage
    //localStorage.setItem("9AM", (TextField9am.val()));
    //localStorage.setItem("10AM", (TextField10am.val()));
    //localStorage.setItem("11AM", (TextField11am.val()));
    //localStorage.setItem("12PM", (TextField12pm.val()));
    //localStorage.setItem("1PM", (TextField1pm.val()));
    //localStorage.setItem("2PM", (TextField2pm.val()));
    //localStorage.setItem("3PM", (TextField3pm.val()));
    //localStorage.setItem("4PM", (TextField4pm.val()));
    //localStorage.setItem("5PM", (TextField5pm.val()));
  }

     //getting the content stored and sending to the screen. When page is refreshed content will stay
     //("#TextField9am").append(localStorage.getItem("9AM"));
     
     //myName
     //localStorage.getItem("5PM", (TextField5pm.val()));
    //document.getElementById("TextField9am").value = localStorage.getItem('9AM');
    //console.log("9amTextField")

  //Calling the function for the save button
  


//event9.value = localStorage.getItem("event9")

//function saveinput() {
  //var event9AM = document.getElementById("event9AM").value;
  //console.log(event9AM);
//}

//var savebtn = document.getElementById("savebtn");
//savebtn.addEventListener("click", saveinput, false);

//saveinput()