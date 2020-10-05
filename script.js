//!button variables for the content
var nineButton = document.querySelector("#NineSchedule");
var tenButton = document.querySelector("#TenSchedule");
var elevenButton = document.querySelector("#ElevenSchedule");
var twelveButton = document.querySelector("#twelveSchedule");
var oneButton = document.querySelector("#oneSchedule");
var twoButton = document.querySelector("#twoSchedule");
var threeButton = document.querySelector("#threeSchedule");
var fourButton = document.querySelector("#fourSchedule");
var fiveButton = document.querySelector("#fiveSchedule");

//!Input variables for the content
var nineAmInput = document.querySelector("#nineAm-todo");
var tenAmInput = document.querySelector("#tenAm-todo");
var elevenAmInput = document.querySelector("#elevenAm-todo");
var twelvePmInput = document.querySelector("#twelvePm-todo");
var onePmInput = document.querySelector("#onePm-todo");
var twoPmInput = document.querySelector("#twoPm-todo");
var threePmInput = document.querySelector("#threePm-todo");
var fourPmInput = document.querySelector("#fourPm-todo");
var fivePmInput = document.querySelector("#fivePm-todo");

//!span variables for the content
var userNineAmSpan = document.querySelector("#user-nineAm-todo");
var userTenAmSpan = document.querySelector("#user-tenAm-todo");
var userElevenAmSpan = document.querySelector("#user-elevenAm-todo");
var userTwelvePmSpan = document.querySelector("#user-twelvePm-todo");
var userOnePmSpan = document.querySelector("#user-onePm-todo");
var userTwoPmSpan = document.querySelector("#user-twoPm-todo");
var userThreePmSpan = document.querySelector("#user-threePm-todo");
var userFourPmSpan = document.querySelector("#user-fourPm-todo");
var userFivePmSpan = document.querySelector("#user-fivePm-todo");

var msgDiv = document.querySelector("#msg");
var msgTwoDiv = document.querySelector("#msgTwo");
//var msgDiv = document.querySelector("#msg");

//function runs to display the text inside the planer.
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }
//?this works to use the local storage to save the input data in the planner and then display it in the <span> below the input for nine button.
  nineButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var user = {
      nineAm: nineAmInput.value.trim(),
      
    };
  
    console.log(user);
    
    // validate the fields
    if (user.nineAm === "") {
      displayMessage("error", "First name cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
      // set new submission
      localStorage.setItem("user", JSON.stringify(user));
      
      // get most recent submission
      var lastUser = JSON.parse(localStorage.getItem("user"));
      userNineAmSpan.textContent = lastUser.nineAm;
      
    }
  });

//?this works to use the local storage to save the input data in the planner and then display it in the <span> below the input for ten button.
  tenButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create user object from submission
    var user = {
      tenAm: tenAmInput.value.trim(),
    };
    console.log(user);
    // validate the fields
    if (user.tenAm === "") {
      displayMessage("error", "First name cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
      // set new submission
      localStorage.setItem("user", JSON.stringify(user));
      // get most recent submission
      var lastUser = JSON.parse(localStorage.getItem("user"));
      userTenAmSpan.textContent = lastUser.tenAm;
    }
  });

  function displayMessageTwo(type, message) {
    msgTwoDiv.textContent = message;
    msgTwoDiv.setAttribute("class", type);
  }

elevenButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var user = {
      ElevenAm: elevenAmInput.value.trim(),
      
    };
  
    console.log(user);
    
    // validate the fields
    if (user.elevenAm === "") {
      displayMessageTwo("error", "First name cannot be blank");
    } else {
      displayMessageTwo("success", "Registered successfully");
  
      // set new submission
      localStorage.setItem("user", JSON.stringify(user));
      
      // get most recent submission
      var lastUser = JSON.parse(localStorage.getItem("user"));
      userElevenAmSpan.textContent = lastUser.ElevenAm;
    }

  });

function renderTime(){

    //Date
    var myDate = new Date();
    var year = myDate.getYear ();
    if(year < 1000){
        year +=1900 
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var dayM = myDate.getDate();
    var dayArray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    //Time

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h == 24){
            h = 0;
        }else if(h > 12) {
            h = h - 0;
        }

        if(h < 10){
            h = "0" + h;
        }
        if(m < 10){
            m = "0" + m;
        }
        if(s < 10){
            s = "0" + s;
        }
        
        var myClock = document.getElementById("clockDisplay");
        myClock.textContent = " " + dayArray[day] + " " + dayM + ", " + monthArray[month] + " " + year + " | " + h + ":" + "m" + "s";
        myClock.innerText = " " + dayArray[day] + " " + dayM + " " + monthArray[month] + " " + year + " | " + h + ":" + m + ":" + s;

        setTimeout("renderTime ()", 1000);
}

renderTime();

