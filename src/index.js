import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import keyCall from './js/business.js';
console.log($);

// const animalArray = data && data.animals && data.animals.map((animal) => {
//   console.log("whole animal", animal)
//   return animal.name;
// })

// console.log(animalArray);

function getElements(data, children) {
  let output = children;
  console.log(output);
  console.log(data);
  $('.showResults').text(data.animals[0].name);
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    event.preventDefault();
    const children = $('input:radio[name=children]:checked').val();
    keyCall.getAccess(children).then(function(data) {
      getElements(data, children); 
    });
    //    console.log(children);
    //    $('.showResults').text(children);

  });
});