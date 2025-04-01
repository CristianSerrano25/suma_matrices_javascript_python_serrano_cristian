function crearInputs() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
    
    if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
        alert("Por favor, ingresa valores válidos para filas y columnas.");
        return;
    }

    const matricesContainer = document.getElementById("matrices-container");
    matricesContainer.innerHTML = ""; // Limpiar cualquier matriz anterior

    ["Matriz 1", "Matriz 2"].forEach((matriz, index) => {
        let matrizHTML = `<h3>${matriz}</h3><table>`;
        for (let i = 0; i < filas; i++) {
            matrizHTML += "<tr>";
            for (let j = 0; j < columnas; j++) {
                matrizHTML += `<td><input type="number" id="${index}_${i}_${j}" class="matriz-input"></td>`;
            }
            matrizHTML += "</tr>";
        }
        matrizHTML += "</table>";
        matricesContainer.innerHTML += matrizHTML;
    });

    document.getElementById("sumar").style.display = "block"; // Mostrar botón de suma
}

function sumarMatrices() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);

    let matriz1 = [], matriz2 = [];

    for (let i = 0; i < filas; i++) {
        matriz1[i] = [];
        matriz2[i] = [];
        for (let j = 0; j < columnas; j++) {
            const val1 = document.getElementById(`0_${i}_${j}`).value;
            const val2 = document.getElementById(`1_${i}_${j}`).value;

            if (val1 === "" || val2 === "") {
                alert("Todos los valores deben estar completos.");
                return;
            }

            matriz1[i][j] = Number(val1);
            matriz2[i][j] = Number(val2);
        }
    }

    fetch("/sumar-matrices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matriz1, matriz2 })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
            return;
        }

        let resultadoHTML = "<h3>Matriz Resultado</h3><table>";
        data.resultado.forEach(fila => {
            resultadoHTML += "<tr>";
            fila.forEach(valor => {
                resultadoHTML += `<td>${valor}</td>`;
            });
            resultadoHTML += "</tr>";
        });
        resultadoHTML += "</table>";
        document.getElementById("resultado").innerHTML = resultadoHTML;
    })
    .catch(error => console.error("Error:", error));
}

