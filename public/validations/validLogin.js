const button = document.getElementById('button')

button.addEventListener('click', (event) => {
  //event.preventDefault()

  const email = document.getElementById('email')
  const password = document.getElementById('password')

  if(email.value =='') {
    email.classList.add('errorInput')
    event.preventDefault()
  }else{
    email.classList.remove('errorInput')
  }

  if(password.value =='') {
    password.classList.add('errorInput')
    event.preventDefault()
  }else{
    password.classList.remove('errorInput')
  }

  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)) {
    email.classList.add('errorInput')
    event.preventDefault()
  }else{
    email.classList.remove('errorInput')
  }

  if(password.value.length <= 7) {
    password.classList.add('errorInput')
    event.preventDefault()
  }else{
    password.classList.remove('errorInput')
  }

})