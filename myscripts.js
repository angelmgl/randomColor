function hex() {
    let code = Math.floor(Math.random() * 16);
    switch (code) {
        case 10: return "a";
        break;
        case 11: return "b";
        break;
        case 12: return "c";
        break;
        case 13: return "d";
        break;
        case 14: return "e";
        break;
        case 15: return "f";
        break;
        default: return "" + code;
    }
}

function randomColor() {
    return `#${hex()}${hex()}${hex()}${hex()}${hex()}${hex()}`;
}

function randomGradient() {
    let color1 = randomColor();
    let color2 = randomColor();
    return `linear-gradient(${color1},${color2})`;
}

function changeColor() {
    let code = randomColor();
    body.style.background = code;
    hexac.innerHTML = code;
}

function changeGradient() {
    let code = randomGradient();
    let cotxt = code.substring(16,31).replace(","," - ");
    body.style.background = code;
    hexag.innerHTML = cotxt;
}

function changeFuncion() {
    const divColor = document.getElementById("color");
    const divGradient = document.getElementById("gradient");
    const btn = document.getElementById("btn");
    divColor.classList.toggle("oculto");
    divGradient.classList.toggle("oculto");
    if (divGradient.classList.contains("oculto")) {
        btn.value = "Cambiar a Gradientes";
        changeColor();
    }  else {
        btn.value = "Cambiar a Colores";
        changeGradient();
    }
}