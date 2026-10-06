function generar() {

    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "1234567890";
    const caracteres = "+-/*!&$#?=@§♀♫_";

    const todos = letrasMinusculas + letrasMayusculas + numeros + caracteres;

    let longitud = parseInt(document.getElementById("longitud").value);

    if (longitud > 20) {
        document.getElementById("resultado").textContent =
            "La contraseña es demasiado larga/Password is too long";
        return;
    }

    if (longitud < 6 || isNaN(longitud)) {
        document.getElementById("resultado").textContent =
            "La contraseña es demasiado corta/Password is too short";
        return;
    }

    let contraseña = "";

    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * todos.length);
        contraseña += todos[indice];
    }

    document.getElementById("resultado").textContent =
        "Contraseña generada/Password generated: " + contraseña;
}