import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getRates } from './getRates';


$(document).ready(function() {
  $('#rateInfo').click(function(event) {
    event.preventDefault();
  });
});