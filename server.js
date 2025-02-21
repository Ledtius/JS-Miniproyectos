const express = require("express"); // Importar Express
const path = require("path"); // Módulo para manejar rutas

const app = express(); // Crear la app de Express
const PORT = 3000; // Puerto donde correrá el servidor

// Servir archivos estáticos (HTML, CSS, JS) desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta para manejar cualquier otra petición
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
