import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getRates } from './getRates.js';

async function parseRatesInfo(newCurrency) {
  const jsonifiedResponse = await getRates(newCurrency);
  if (jsonifiedResponse === false) {
    $("#exchangeValue").text("I'm sorry, something went wrong");
  } else {
    $("#exchangeValue").text(`Exchange Value: ${jsonifiedResponse}`);
  }
}

$(document).ready(function() {
  $("#conversionResults").click(function() {
    let newCurrency = $("#selectedCurrency").val();
    $("#selectedCurrency").val("");
    parseRatesInfo(newCurrency); 
  });
});  
