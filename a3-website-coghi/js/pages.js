// Header navbar

// Função/ variavel de mostrar e ocultar o menu da nav-bar
function menuShow() {
    const menuList = document.querySelector('.menu-list');
    const menuIcon = document.querySelector('.menu-icon');

    // Altera o menu 
    menuList.classList.toggle('active');
// Verifica se o menu ta ativo
    if (menuList.classList.contains('active')) {
// Altera o icone do menu para fechar
        menuIcon.src = "../img/close.svg";
        // animação
        menuList.style.display = 'flex'; 
        setTimeout(() => {
            menuList.style.opacity = '1';
            menuList.style.transform = 'translateY(0)';
        }, 10); 
    } else {
        menuIcon.src = "../img/bars-solid.svg";
        // Oculta o menu com animação
        menuList.style.opacity = '0';
        menuList.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            menuList.style.display = 'none'; 
        }, 500); 
    }
}

// Form
// Variaveis
document.getElementById('form').addEventListener('submit', function(event) {

    event.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let tell = document.getElementById('tell').value.trim();
    let cep = document.getElementById('cep').value.trim();
    let endereco = document.getElementById('endereco').value.trim();
    let numero = document.getElementById('numero').value.trim();
    let adotar = document.getElementById('adotar').value.trim();

    let erroNome = document.getElementById('erro-nome');
    let erroTell = document.getElementById('erro-tell');
    let erroCep = document.getElementById('erro-cep');
    let erroEndereco = document.getElementById('erro-endereco');
    let erroNumero = document.getElementById('erro-numero');
    let erroAdotar = document.getElementById('erro-adotar');

    let formContentNome = erroNome.closest('.form-content');
    let formContentTell = erroTell.closest('.form-content');
    let formContentCep = erroCep.closest('.form-content');
    let formContentEndereco = erroEndereco.closest('.form-content');
    let formContentNumero = erroNumero.closest('.form-content');
    let formContentAdotar = erroAdotar.closest('.form-content');

    // Reseta as mensagens de erro e classes
    let formContents = document.querySelectorAll('.form-content');
    formContents.forEach(fc => fc.classList.remove('error'));

    // Verificação do campo se está preenchido
    if (nome === '') {
        if (erroNome) erroNome.textContent = 'Por favor, preencha o nome.';
        if (formContentNome) formContentNome.classList.add('error');
    } else {
        if (erroNome) erroNome.textContent = '';
    }

    let tellRegex = /^\d{10,11}$/;
    if (!tellRegex.test(tell)) {
        if (erroTell) erroTell.textContent = 'Por favor, insira um telefone válido';
        if (formContentTell) formContentTell.classList.add('error');
    } else {
        if (erroTell) erroTell.textContent = '';
    }

    let cepRegex = /^\d{5}-?\d{3}$/;
    if (!cepRegex.test(cep)) {
        if (erroCep) erroCep.textContent = 'Por favor, insira um CEP válido.';
        if (formContentCep) formContentCep.classList.add('error');
    } else {
        if (erroCep) erroCep.textContent = '';
    }

    if (endereco === '') {
        if (erroEndereco) erroEndereco.textContent = 'Por favor, preencha o endereço.';
        if (formContentEndereco) formContentEndereco.classList.add('error');
    } else {
        if (erroEndereco) erroEndereco.textContent = '';
    }

    let numeroRegex = /^\d+$/;
    if (!numeroRegex.test(numero)) {
        if (erroNumero) erroNumero.textContent = 'Por favor, insira um número válido.';
        if (formContentNumero) formContentNumero.classList.add('error');
    } else {
        if (erroNumero) erroNumero.textContent = '';
    }

    if (adotar === '') {
        if (erroAdotar) erroAdotar.textContent = 'Por favor, preencha o campo de justificativa.';
        if (formContentAdotar) formContentAdotar.classList.add('error');
    } else {
        if (erroAdotar) erroAdotar.textContent = '';
    }

    // Se todas as validações passarem, envia o formulário
    if (document.querySelectorAll('.form-content.error').length === 0) {
        alert('Formulário enviado com sucesso!');
        this.submit();
    }
});
