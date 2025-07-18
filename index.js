const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Dato simulado
const post = [
    { id: 1, title: "primer post"},
    { id: 2, title: "segundo post"}
]

// Mi primer endpoin para traer post
app.get('/posts', (req, res) =>{
    res.json(post)
});

// Mi segundo endpoint para guardar un nuevo post
app.post('/posts', (req, res) =>{
    const nuevoPost = req.body;
    console.log('Nuevo post recibido: ', nuevoPost);
    post.push(nuevoPost);
    res.json({ message: 'Post agregado correctamente', data: nuevoPost});
});

app.delete

app.listen(PORT, ()=>{
    console.log(`Esta vivo!! nuestro server esta vivo y corriendo en http://localhost:${PORT}`);
})