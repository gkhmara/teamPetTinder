import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import keyCall from './js/business.js';
console.log($);


function clearFields() {
  $('.showResults').text("");
  $('.showErrors').text("");
}


function getElements(data) {
  for (let i = 0; i < data.animals.length; i++) {
    if (data.animals[i].photos.length < 0) {
      $('.showResults').append(data.animals[i].name + ": " + data.animals[i].breeds.primary + `<br>` + data.animals[i].age + `<br>`);
    } else if (data.animals[i].photos.length > 0) 
      $('.showResults').append(
        `<div class="card border-dark mb-3" style="width: 25rem;">` 
        + `<img class="card-img-top"<img src="${data.animals[i].primary_photo_cropped.small}"></a>` 
        + `<ul>`
        + `<div class="card-body">` 
        + `<h5 class="card-title">Name: ${data.animals[i].name}</h5>` 
        + `<b class=text-primary>Breed</b>: ${data.animals[i].breeds.primary}` 
        + `<br>` 
        + `<b class=text-primary>Age</b>: ${data.animals[i].age}`
        + `<br>` 
        + `<b class=text-primary>Gender</b>: ${data.animals[i].gender}` 
        + `<br>` 
        + `<b class=text-primary>Location</b>: ${data.animals[i].contact.address.city},${data.animals[i].contact.address.state}`
        + `<br>` 
        + `<a href="${data.animals[i].url}" target="_blank" type="button" class="btn btn-info">Click for Info</a>`
        + `<br>` 
        + `</div>`
        + `</div>`
      );
    
  }  
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    event.preventDefault();
    const species = $('input:radio[name=species]:checked').val(); 
    const children = $('input:radio[name=children]:checked').val();
    const dogs = $('input:radio[name=dogs]:checked').val();
    const cats = $('input:radio[name=cats]:checked').val();
    const city = $("#city").val().toLowerCase();
    const state = $("#state").val().toLowerCase();
    
    clearFields();
    keyCall.getAccess(species, children, dogs, cats, city, state).then(function(data) {
      getElements(data);
      console.log(data); 
    });
    

  });
});