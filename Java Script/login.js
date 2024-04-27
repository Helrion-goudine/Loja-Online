function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login === "Yan" && senha === "123") {
        alert('Sucesso');
        location.href = "cliente.html";
        return false;
    } else {
        alert('Login ou senha incorretos');
        return false;
    }
}
