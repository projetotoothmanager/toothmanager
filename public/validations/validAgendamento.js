const button = document.getElementById('salvar')

button.addEventListener('click', (event) => {
  event.preventDefault()

  const hora = document.getElementById('data')
  const data = document.getElementById('hora')
  const paciente = document.getElementById('paciente')

  if(hora.value =='') {
    hora.classList.add('errorInput')
  }else{
    hora.classList.remove('errorInput')
  }

  if(data.value =='') {
    data.classList.add('errorInput')
  }else{
    data.classList.remove('errorInput')
  }

  if(paciente.value =='') {
    paciente.classList.add('errorInput')
  }else{
    paciente.classList.remove('error.Input')
  }

})