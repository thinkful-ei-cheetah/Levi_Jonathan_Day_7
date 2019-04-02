'use strict';

function getDogImage(dogBreed) {
  fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === "error") {
        $('.results-img').replaceWith(`<span class="results-img">Error: ${responseJson.message}<span>`);
      }
      else {
        displayResults(responseJson);
      }
      console.log(responseJson);
      })
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  /// console.log(responseJson.message);
    let responseImg = `<img src="${responseJson.message}" class="results-img">`;
    console.log(responseJson);

  $('.results-img').replaceWith(responseImg);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const dogBreed = $('.js-dog-num-input').val();
   // console.log(dogNum);
    // Fix this later
    getDogImage(dogBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});