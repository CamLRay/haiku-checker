import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Haiku } from "./js/haiku";
import { HaikuGenerator } from "./js/haiku-generator";

$("form").submit(function(event) {
  event.preventDefault();
  let haiku = new Haiku($("#line1").val(), $("#line2").val(), $("#line3").val());
  const countArray = haiku.syllableTotals();
  $("#line1").next("span").text(` ${countArray[0]}`);
  $("#line2").next("span").text(` ${countArray[1]}`);
  $("#line3").next("span").text(` ${countArray[2]}`);

  if(countArray[0] === 5 && countArray[2] === 5 && countArray[1] === 7){
    $("#output").text("What a nice haiku*");
  } else {
    $("#output").text("not a haiku*");
  }
});
$("#random").click(function() {
  let newHaiku = new HaikuGenerator();
  newHaiku.buildHaikuFirst();
  newHaiku.buildHaikuSecond();
  newHaiku.buildHaikuThird();
  $("#randLine1").html(`${newHaiku.line1}<br>${newHaiku.line2}<br>${newHaiku.line3}`);
});

