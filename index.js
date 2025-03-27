require('dotenv').config();
const express = require ('express');
const cors = require ('cors');

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use (cors());
app .use (express.json ());

//raiz
app.get('/',(req,res) => {
    res.send('backend funcionando');
});

// lista de tareas
let tasks = [
    { id: 1, title: 'estudiar', completed: false},
    { id :2, title : 'comprar', completed: false},
];


//todas las tareas 
app.get ('/tasks',(req, res) => {
    res.json(tasks);});

//nueva tarera  
app.post ('/tasks',(req, res) => {
    const {title} = req.body;
    const newTask = {
        id: tasks.length + 1, 
        title,
        completed: false, 
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// actualizar
app.put('/tasks/:id',(req,res) => {
    const {id} = req.params;
    const { title,completed } = req.body;
    const taskIndex = tasks.findIndex(task => task.id == id);

    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], title, completed};
        res.json(tasks[taskIndex]);
    } else { 
    res.status(404).json({message: 'tarea no encontrada'});
}
});

//eliminar tares
app.delete('/tasks/:id', (req, res) => {
    const {id} =req.params;
    tasks = tasks.filter(task => task.id != id);
    res.status(204).end ();
});


app.listen(PORT,() => {
    console.log (`servidor corriendo en http://localhost:${PORT}`);
});
