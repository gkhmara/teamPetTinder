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

// function getElements(data) {
//   console.log(data);
//   console.log(data.animals.length);
//   $('.showResults').text(data.animals[1].name);
// }

function clearFields() {
  $('.showResults').text("");
}

function getElements(data) {
  for (let i = 0; i < data.animals.length; i++) {
    $('.showResults').append(`<img src="${data.animals[i].primary_photo_cropped.small}">` + data.animals[i].name + ": " + data.animals[i].description + `<br>`);
    console.log(data);
  }
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    event.preventDefault();
    const children = $('input:radio[name=children]:checked').val();
    clearFields();
    keyCall.getAccess(children).then(function(data) {
      getElements(data); 
    });
    //    console.log(children);
    //    $('.showResults').text(children);

  });
});