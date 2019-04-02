'use strict';

function getDogImage(dogNum) {


  fetch('https://dog.ceo/api/breeds/image/random/'+dogNum)
    .then(response => response.json())
    .then(responseJson => {

      displayResults(responseJson);
      //console.log(responseJson);
      })
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  /// console.log(responseJson.message);
   let imagesString = '';
    for (let i=0; i<responseJson.message.length; i++)
    {
      imagesString += `<img src="${responseJson.message[i]}" class="results-img">`;
    }

    console.log(imagesString)

  $('.results-img').replaceWith(imagesString);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const dogNum = $('.js-dog-num-input').val();
   // console.log(dogNum);
    // Fix this later
    if (dogNum < 1 || dogNum > 50) {
      throw new Error('Please choose between 1 and 50 dogs');
    }
    getDogImage(dogNum);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});