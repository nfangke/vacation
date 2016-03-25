var aCount=0;
var bCount=0;
var cCount=0;
var dCount=0;

var aIncrease = function() {
aCount = aCount+1}

var bIncrease = function() {
bCount = bCount+1}

var cIncrease = function() {
cCount = cCount+1}

var dIncrease = function() {
dCount = dCount+1}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();

    if (question1 === "a") {
      aIncrease();
    } else if (question1 === "b") {
      bIncrease();
    } else if (question1 === "c") {
      cIncrease();
    } else if (question1 === "d") {
      dIncrease();

    if (question2 === "a") {
      aIncrease();
    } else if (question2 === "b") {
      bIncrease();
    } else if (question2 === "c") {
      cIncrease();
    } else if (question2 === "d") {
      dIncrease();

    if (question3 === "a") {
      aIncrease();
    } else if (question3 === "b") {
      bIncrease();
    } else if (question3 === "c") {
      cIncrease();
    } else if (question3 === "d") {
      dIncrease();

    if (question4 === "a") {
      aIncrease();
    } else if (question4 === "b") {
      bIncrease();
    } else if (question4 === "c") {
      cIncrease();
    } else if (question4 === "d") {
      dIncrease();

      console.log("aCount");

    if (aCount <= 2) {
      $(".confirmationMessageA").show();
    } else if (bCount <= 2) {
      $(".confirmationMessageB").show();
    } else if (cCount <= 2) {
      $(".confirmationMessageB").show();
    } else if (dCount <= 2) {
      $(".confirmationMessageD").show();
    }

  });

});
