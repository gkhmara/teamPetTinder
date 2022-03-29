import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import keyCall from './js/business.js';
console.log($);



keyCall.getAccess().then(function(data) {
  console.log(data);


});

// const animalArray = data && data.animals && data.animals.map((animal) => {
//   console.log("whole animal", animal)
//   return animal.name;
// })

// console.log(animalArray);

$(document).ready(function() {
  $('#enterSearch').click(function() {
    event.preventDefault();
    const children = $('input:radio[name=children]:checked').val();
    console.log(children);
    $('.showResults').text(children);

  });
});