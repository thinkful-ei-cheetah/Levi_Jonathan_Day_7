'use strict';

function getDogImage(dogBreed) {
  fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
    .then(response => response.json())
    .then(responseJson => {

      displayResults(responseJson);
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
    if (dogBreed < 1 || dogBreed > 50) {
      throw new Error('Please choose between 1 and 50 dogs');
    }
    getDogImage(dogBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});