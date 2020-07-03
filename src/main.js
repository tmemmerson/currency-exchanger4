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
    $("#exchangeValue").text(`Exchange rate: ${jsonifiedResponse.conversion_rates[newCurrency]}`);
    const amount=$("#amount").val();
    const selectedCurrency=$("#selectedCurrency").val();
    $("#finalPrintout").text(`Converted amount: $${jsonifiedResponse.conversion_rates[newCurrency]*amount} ${selectedCurrency}`);
    $("#amountPrint").text(`Amount to exchange: $${amount} USD`);
  }
}

$(document).ready(function() {
  $("#submitAmount").click(function() {
    let newCurrency = $("#selectedCurrency").val();
    parseRatesInfo(newCurrency); 
  });
});  
