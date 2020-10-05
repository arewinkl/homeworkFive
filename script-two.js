
//Todo: see if this function will run
//function displayMessage(type, message) {
 //   msgTwoDiv.textContent = message;
//    msgTwoDiv.setAttribute("class", type);
//  }

elevenButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var user = {
      ElevenAm: elevenAmInput.value.trim(),
      
    };
  
    console.log(user);
    
    // validate the fields
    if (user.elevenAm === "") {
      displayMessage("error", "First name cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
      // set new submission
      localStorage.setItem("user", JSON.stringify(user));
      
      // get most recent submission
      var lastUser = JSON.parse(localStorage.getItem("user"));
      userElevenAmSpan.textContent = lastUser.ElevenAm;
    }

  });

  //?this works to use the local storage to save the input data in the planner and then display it in the <span> below the input for twelve button.
  twelveButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create user object from submission
    var user = {
      twelvePm: twelvePmInput.value.trim(),
    };
    console.log(user);
    // validate the fields
    if (user.twelvePm === "") {
      displayMessage("error", "First name cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
      // set new submission
      localStorage.setItem("user", JSON.stringify(user));
      // get most recent submission
      var lastUser = JSON.parse(localStorage.getItem("user"));
      userTwelvePmSpan.textContent = lastUser.twelvePm;
    }
  });

  //?this works to use the local storage to save the input data in the planner and then display it in the <span> below the input for one button.
  oneButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create user object from submission
    var user = {
      onePm: onePmInput.value.trim(),
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
      userOnePmSpan.textContent = lastUser.onePm;
    }
  });

  //?this works to use the local storage to save the input data in the planner and then display it in the <span> below the input for two button.
  twoButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create user object from submission
    var user = {
      twoPm: twoPmInput.value.trim(),
    };
    console.log(user);
    // validate the fields
    if (user.twoPm === "") {
      displayMessage("error", "First name cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
      // set new submission
      localStorage.setItem("user", JSON.stringify(user));
      // get most recent submission
      var lastUser = JSON.parse(localStorage.getItem("user"));
      userTwoPmSpan.textContent = lastUser.twoPm;
    }
  });

  //?this works to use the local storage to save the input data in the planner and then display it in the <span> below the input for three button.
  ThreeButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create user object from submission
    var user = {
      threePm: tenAmInput.value.trim(),
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
      userThreePmSpan.textContent = lastUser.threePm;
    }
  });

  //?this works to use the local storage to save the input data in the planner and then display it in the <span> below the input for four button.
  fourButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create user object from submission
    var user = {
      fourPm: tenAmInput.value.trim(),
    };
    console.log(user);
    // validate the fields
    if (user.fourPm === "") {
      displayMessage("error", "First name cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
      // set new submission
      localStorage.setItem("user", JSON.stringify(user));
      // get most recent submission
      var lastUser = JSON.parse(localStorage.getItem("user"));
      userFourPmSpan.textContent = lastUser.fourPm;
    }
  });

  //?this works to use the local storage to save the input data in the planner and then display it in the <span> below the input for five button.
  fiveButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create user object from submission
    var user = {
      fivePm: tenAmInput.value.trim(),
    };
    console.log(user);
    // validate the fields
    if (user.fivePm === "") {
      displayMessage("error", "First name cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
      // set new submission
      localStorage.setItem("user", JSON.stringify(user));
      // get most recent submission
      var lastUser = JSON.parse(localStorage.getItem("user"));
      userFivePmSpan.textContent = lastUser.fivePm;
    }
  });


  //!attempt to get array working

  //var hourZone ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"]
  //var hours [9, 10, 11, 12, 13, 14, 15, 16, 17]

  //var times = {
  //  hour9:
 //   hour10:
 //   hour11:
 //   hour12:
 //   hour13:
 //   hour14:
 //   hour15:
 //   hour16:
 //   hour17:
  //}