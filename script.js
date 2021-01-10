  //Creating a function to display the current date and time
  let renderClock = function(){
      document.getElementById("currentDay").innerHTML = `${moment().format('MMM Do YYYY, h:mm:ss a')}`;
  }

  //Calling functions for the date and time
  renderClock();
  setInterval(renderClock, 1000);

  //var TextField9am = ("#TextField9am");
  var TextField10am = ("#TextField10AM");
  var TextField11am = ("#TextField11AM");
  var TextField12pm = ("#TextField12PM");
  var TextField1pm = ("#TextField1PM");
  var TextField2pm = ("#TextField2PM");
  var TextField3pm = ("#TextField3PM");
  var TextField4pm = ("#TextField4PM");
  var TextField5pm = ("#TextField5PM");
  var saveValue = localStorage.getItem("TextField9AM")

  //The function for the save button
  function saveButton(num) { //Passing a number we're going to use to determine the time
    //console.log(this.siblings)
    let timestring = parseTime(num)
    var input = document.getElementById("TextField" + timestring).value;
    localStorage.setItem(timestring, input);
    document.getElementById("TextField" + timestring).value = localStorage.getItem(timestring);
    var testStorage = localStorage.getItem(timestring);
    console.log("input: ", input)
    console.log("testStorage: ", testStorage)

  }

  function parseTime(num) {
    //Take the number and check to see if it's less than 12 or greater than equal to 12
    if (num <= 12) {
      console.log("AM")
      return num + "AM"
    } else if (num > 12){
      console.log("PM")
      return num + "PM"
    }
    
    //If less than or equal to 12 return the number with AM next to it
    //If greater than 12 subtract 12 and return it as a PM

  }

  $("button").click(saveButton)
  //localStorage.getItem("TextField9am")
  console.log(localStorage.getItem("9AM"))
  TextField9AM.value = localStorage.getItem("9AM")

    //localStorage.setItem("9AM", value);
    //var input = localStorage.getItem("9AM");
    //document.getElementById("TextField9am").innerHTML = input;
    
    //document.getElementById("TextField9am")
    //console.log(input)
    //var input = document.getElementById("TextField9am");
    //localStorage.setItem("9AM", input.val());
    //let myName = localStorage.getItem("9AM");
    //myName
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
//save input