from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir peticiones desde el frontend

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/sumar-matrices", methods=["POST"])
def sumar_matrices():
    data = request.json
    matriz1 = data.get("matriz1", [])
    matriz2 = data.get("matriz2", [])

    # Validar que las matrices no estén vacías y tengan el mismo tamaño
    if not matriz1 or not matriz2 or len(matriz1) != len(matriz2) or len(matriz1[0]) != len(matriz2[0]):
        return jsonify({"error": "Las matrices deben ser del mismo tamaño y no estar vacías"}), 400

    filas = len(matriz1)
    columnas = len(matriz1[0])

    # Sumar matrices
    matriz_resultado = [[matriz1[i][j] + matriz2[i][j] for j in range(columnas)] for i in range(filas)]

    return jsonify({"resultado": matriz_resultado})

if __name__ == "__main__":
    app.run(debug=True)
