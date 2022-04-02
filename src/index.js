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
  $('.showDogResults').text("");
}

// function getElements(data) {
//   for (let i = 0; i < data.animals.length; i++) {
//     $('.showResults').append(`<img src="${data.animals[i].primary_photo_cropped.small}">` + data.animals[i].name + ": " + data.animals[i].description + `<br>`);
//     console.log(data, data.animals[i].photos.length);
//   }
// }

function getElements(data) {
  for (let i = 0; i < data.animals.length; i++) {
    if (data.animals[i].photos.length < 0) {
      $('.showResults').append(data.animals[i].name + ": " + data.animals[i].description + `<br>`);
      console.log(data, data.animals[i].photos.length);
    } else if (data.animals[i].photos.length > 0)
      $('.showResults').append(`<img src="${data.animals[i].primary_photo_cropped.small}">` + data.animals[i].name + ": " + data.animals[i].description + `<br>`);
    console.log(data, data.animals[i].photos.length);
  }  
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    event.preventDefault();
    const species = $('input:radio[name=species]:checked').val();
    const children = $('input:radio[name=children]:checked').val();
    const dogs = $('input:radio[name=dogs]:checked').val();
    const cats = $('input:radio[name=cats]:checked').val();
    const special = $('input:radio[name=special]:checked').val();
    clearFields();
    keyCall.getAccess(species, children, dogs, cats, special).then(function(data) {
      getElements(data); 
    });
    //    console.log(children);
    //    $('.showResults').text(children);

  });
});