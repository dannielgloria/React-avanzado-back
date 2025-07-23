const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/auth.routes')

const app = express();

connectDB();

// Middleware
app.use(cors()); // permite que otros desarrollos se comuniquen con este servidor
app.use(express.json()); // uso de JSONs

// Registra rutas 👇
app.use('/post', postRoutes); // rutas para publicaciones = http://localhost:3000/post
app.use('/user', userRoutes); // rutas para publicaciones = http://localhost:3000/user

module.exports = app;