function crearInputs() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
    const contenedor = document.getElementById("matrices");
    contenedor.innerHTML = "";

    ["Matriz 1", "Matriz 2"].forEach((titulo, index) => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${titulo}</h3>`;
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                div.innerHTML += `<input type="number" id="${index}_${i}_${j}" required>`;
            }
            div.innerHTML += "<br>";
        }
        contenedor.appendChild(div);
    });

    document.getElementById("sumar").style.display = "block";
}

function sumarMatrices() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);

    let matriz1 = [], matriz2 = [];

    for (let i = 0; i < filas; i++) {
        matriz1[i] = [];
        matriz2[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz1[i][j] = Number(document.getElementById(`0_${i}_${j}`).value);
            matriz2[i][j] = Number(document.getElementById(`1_${i}_${j}`).value);
        }
    }

    fetch("http://localhost:3000/sumar-matrices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matriz1, matriz2 })
    })
    .then(res => res.json())
    .then(data => {
        let resultadoHTML = "";
        data.resultado.forEach(fila => {
            resultadoHTML += `<p>${fila.join(" ")}</p>`;
        });
        document.getElementById("resultado").innerHTML = resultadoHTML;
    });
}
