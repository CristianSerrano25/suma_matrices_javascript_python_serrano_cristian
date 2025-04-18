# Proyecto de Suma de Matrices (JS + Python)

Este proyecto permite sumar dos matrices ingresadas por el usuario a través de una interfaz web. El frontend está desarrollado en **JavaScript (Node.js + Express)**, mientras que el backend utiliza **Flask (Python)**.

## Cómo Usar el Proyecto

### **1️⃣ Configurar el Backend (Python con Flask)**
```bash
cd py  
python -m venv venv         # Crear entorno virtual  
source venv/bin/activate    # Activar entorno en Mac/Linux  
venv\Scripts\activate       # Activar en Windows  
pip install -r requirements.txt  # Instalar dependencias  
python app.py               # Ejecutar el servidor Flask  
```
- **El backend corre en `http://127.0.0.1:5000/`**

### **2️⃣ Configurar el Frontend y Servidor Node.js**
```bash
cd js  
npm install                 # Instalar dependencias  
node server.js              # Ejecutar servidor Node.js  
```
- **El servidor Node.js corre en `http://127.0.0.1:3000/`**
- **Abre `http://127.0.0.1:3000/` en el navegador**
- **El frontend envía datos al backend en `http://127.0.0.1:5000/sumar-matrices`**

---

##  Funcionamiento
1. El usuario ingresa las dimensiones de las matrices.  
2. Se generan inputs dinámicos para ingresar los valores.  
3. Se valida la entrada y se envían los datos al backend.  
4. Flask procesa la suma y devuelve el resultado.  
5. La interfaz muestra la matriz resultante.

**Proyecto listo para usar!** 

