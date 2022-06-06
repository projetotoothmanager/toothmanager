const form = document.querySelector('form.form-auth');
const buttonForm = document.querySelector('form.form-auth .login-submit');
const inputsForm = document.querySelectorAll('form.form-auth input');

inputsForm.forEach((input) => {
    input.insertAdjacentHTML('afterend', '<span class="error" style="display:none">Campo incorreto</span>');
})

function ehInputValido(email, value) {
    if (!value) {
        return { ehCampoValido: false, mensagem: 'Campo obrigatório' };
    }

    switch (nome) {
        case 'name':
            return value.length > 20 && value.length < 80 ? { ehCampoValido: true } : { ehCampoValido: false, mensagem: 'Deve ter entre 20 à 80 caracteres' };

        case 'surname':
            return value.length > 2 && value.length < 100 ? { ehCampoValido: true } : { ehCampoValido: false, mensagem: 'Deve ter entre 2 à 100 caracteres' };

        default:
            return { ehCampoValido: true };
    }
}

form.onsubmit = (event) => {
    const inputs = document.querySelectorAll('form.form-auth input');

    // undefined null '' 0 = negar uma vez vira verdadeiro
    let ehFormularioInvalido = false;

    inputs.forEach(input => {
        const resposta = ehInputValido(input.name, input.value);

        if (!resposta.ehCampoValido) {
            ehFormularioInvalido = true;
            input.nextElementSibling.style.display = 'block';
            input.nextElementSibling.innerHTML = resposta.mensagem;
        } else {
            input.nextElementSibling.style.display = 'none';
        }
    });

    if (ehFormularioInvalido) {
        event.preventDefault();
    }
}

//buttonForm.insertAdjacentHTML('beforebegin', '<input type="date" name="birthday">');