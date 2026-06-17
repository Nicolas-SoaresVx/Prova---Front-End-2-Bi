function validar(){
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;
    const error = document.querySelector('.error-resposta');

    if(email.includes("@gmail.com") && senha.length >= 8){
        alert("Email válido")
        error.innerText = " ";
    }else{
        error.innerText = "E-mail inválido ou senha menor de 8 caracteres";
    }
}