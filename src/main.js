import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getRate } from './getRates';

async function getRates(USD) {
  const jsonifiedResponse = await getRate(USD);
  if (jsonifiedResponse === false) {
    $("#exchangeValue").text("I'm sorry, something went wrong with your request")
  } else {
    $("#exchangeValue").text(`Exchange Value: ${jsonifiedResponse.USD}`);
  }
}

$(document).ready(function() {
  $("#exchangeValue").click(function() {
    let USD = $("#conversion_rates").val();
    $("#conversion_rates").val("");

    getRates(USD);
  });
});  
