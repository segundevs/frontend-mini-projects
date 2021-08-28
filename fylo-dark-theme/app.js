const form = document.querySelector('.access-form');

//Function to insert error or success message in the DOM
const responseMessage = (msg, color) => {
  const error = document.querySelector('.error');
  error.textContent = msg;
  error.style.color = color;
}

//Add event listener to call function on submit
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const input = document.querySelector('.input-field');

//Check if input field is not empty and display appropriate response
  if(input.value !== ''){
    responseMessage('You have been signed up', ' hsl(141, 53%, 53%)');
    input.value = '';
  }else{
    responseMessage('Please enter a valid email address', 'hsl(0, 100%, 63%)');
  }

//Clear error or success message after 2 seconds
  setTimeout(()=>{
    responseMessage('')
  }, 2000)
})

