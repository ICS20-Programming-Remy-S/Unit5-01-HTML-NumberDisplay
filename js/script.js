// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict";

function enterClicked () {
  // create a variable for if statment text
  let message = "";

  // Use min and max user has entered for results
  let min = parseInt(document.getElementById('min').value);
  
  let max = parseInt(document.getElementById('max').value);

  let counter = min;

    //if statement when user enter no min or max
  if (isNaN(min) || isNaN(max)){
    message = "Please Enter a Min and/or Max"
  }
  //if statement when user enter invalid min
  else if (counter > max){
    message = "Please a Min that is Less that the Max"
  }
  else {
  //while statement for the number that will be displayed
    while (counter <= max){
    //Number with line break
    message = message + counter + ", "
    //Add to counter
    counter = counter + 1;
  }
  }
  // Display Results back to User
  document.getElementById("result").innerHTML = message
}
