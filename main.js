// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
EMPTY_HEART.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(response => {
      heart.classList.add('activated-heart');
    })
    .catch(error => {
      heart.classList.remove('activated-heart');
      const errorModal = document.getElementById('modal');
      const errorMessage = document.getElementById('modal-message');
      errorModal.classList.remove('hidden');
      errorMessage.textContent = error;
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000)
    });
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
