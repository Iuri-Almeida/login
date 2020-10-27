function openAndCloseEye (event) {
    // diferenciando qual botão for clicado
    const button = event.path[2].childNodes[1].name;

    // selecinar o elemento
    const password = document.querySelector(`[name = "${button}"]`);

    // trocar de imagem
    if (event.path[0].src == "http://127.0.0.1:5500/images/open-eye.png") {
        event.path[0].src = "http://127.0.0.1:5500/images/closed-eye.png";

        password.type = "password";
    }

    else {
        event.path[0].src = "http://127.0.0.1:5500/images/open-eye.png";
        password.type = "text";
    }
}