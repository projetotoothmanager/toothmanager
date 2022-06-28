const button = document.getElementById('salvar')

button.addEventListener('click', (event) => {
  
  const hora = document.getElementById('hora')
  const data = document.getElementById('data')
  const paciente = document.getElementById('paciente')

  if(hora.value =='') {
    hora.classList.add('errorInput')
    event.preventDefault()
  }else{
    hora.classList.remove('errorInput')
  }

  if(data.value =='') {
    data.classList.add('errorInput')
    event.preventDefault()
  }else{
    data.classList.remove('errorInput')
  }

  if(paciente.value =='') {
    paciente.classList.add('errorInput')
    event.preventDefault()
  }else{
    paciente.classList.remove('error.Input')
  }

})