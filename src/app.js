const express = require('express');
const postRoutes = require('./routes/post.routes')

const app = express();
app.use(express.json());

// Registra rutas 👇
app.use('/post', postRoutes); // rutas para publicaciones = http://localhost:3000/post

module.exports = app;