function validar(){
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;
    const error = document.querySelector('.error-resposta');

    if(email.includes("@gmail.com") && senha.length >= 8){
        alert("Email válido")
        error.innerText = " ";
        window.location.href = "painel.html";
    }else{
        error.innerText = "E-mail inválido ou senha menor de 8 caracteres";
    }
}

function salvarInscricao(){
    const senha1 = document.getElementById('senha-cadastro').value;
    const senha2 = document.getElementById('confirma-senha').value;
    const email = document.getElementById('email-cadastro').value;
    const error = document.querySelector('error-resposta');

    if(senha1 == senha2){
        alert("Inscrição salva com sucesso!")
        error.innerText = " ";
    }else{
        error.innerText = "Senha NÂO pode ser DIFERENTE"
    }

    if(email.includes("@gmail.com")){
        alert("Email válido")
        error.innerText = " ";
    }else{
        error.innerText = "E-mail inválido";
    }
}