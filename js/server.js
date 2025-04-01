const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/sumar-matrices", (req, res) => {
    const { matriz1, matriz2 } = req.body;

    if (!matriz1 || !matriz2) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const filas = matriz1.length;
    const columnas = matriz1[0].length;
    let matrizResultado = [];

    for (let i = 0; i < filas; i++) {
        matrizResultado[i] = [];
        for (let j = 0; j < columnas; j++) {
            matrizResultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    res.json({ resultado: matrizResultado });
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));