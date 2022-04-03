import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import keyCall from './js/business.js';
console.log($);


function clearFields() {
  $('.showResults').text("");
}

// function getElements(data) {
//   for (let i = 0; i < data.animals.length; i++) {
//     if (data.animals[i].photos.length < 0) {
//       $('.showResults').append(data.animals[i].name + ": " + data.animals[i].description + `<br>`);
//       console.log(data, data.animals[i].photos.length);
//     } else if (data.animals[i].photos.length > 0)
//       $('.showResults').append(`<img src="${data.animals[i].primary_photo_cropped.small}">` + data.animals[i].name + ": " + data.animals[i].description + `<br>`);
//     console.log(data, data.animals[i].photos.length);
//   }  
// }

function getElements(data) {
  for (let i = 0; i < data.animals.length; i++) {
    if (data.animals[i].photos.length < 0) {
      $('.showResults').append(data.animals[i].name + ": " + data.animals[i].breeds.primary + `<br>`+ data.animals[i].age + `<br>`);
      // console.log(data, data.animals[i].photos.length);
    } else if (data.animals[i].photos.length > 0)
      $('.showResults').append(`<a href="${data.animals[i].url}"><img src="${data.animals[i].primary_photo_cropped.small}"></a>` + `<ul>` + "<b>Name</b>: " + data.animals[i].name + `<br>` + "<b>Breed</b>: " + data.animals[i].breeds.primary + `<br>` + "<b>Age</b>: " + data.animals[i].age + `<br>` + "<b>Gender</b>: " + data.animals[i].gender + `<br>` + "<b>Location</b>: " + data.animals[i].contact.address.city + ", " + data.animals[i].contact.address.state + `<br>` + "<b>Click Image for Adoption Details</b>" + `<br>`);
    console.log("LOCATION = " + data.animals[i].contact.address.city + data.animals[i].contact.address.state);
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
    const zipCode = $('#location').val();
    // const city = $("#location").val().toLowerCase();
    // const state = $("#state").val().toLowerCase();
    // const stateInfo = document.getElementById("location");
    // const state = stateInfo.options[stateInfo.selectedIndex].value;
    console.log("location =" + typeof(zipCode));

    // console.log("city ="  + city);
    // console.log("state ="  + state);
    clearFields();
    keyCall.getAccess(species, children, dogs, cats, special, zipCode).then(function(data) {
      getElements(data); 
    });
    //    console.log(children);
    //    $('.showResults').text(children);

  });
});