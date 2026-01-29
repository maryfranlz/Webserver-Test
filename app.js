import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
import hbs from 'hbs';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

//!VISTA
//hbs es el responsable de la vista
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(express.static('public'));

//!CONTROLADOR
//el get es el controlador
//el modelo está en la carpeta views
app.get('/', (request, response) => {
    response.render('home', {
        nombre: 'Mary Franco',
        titulo: 'Curso node'
    });
});

app.get('/elements.html', (request, response) => {
    response.render('elements');
});
app.get('/generic.html', (request, response) => {
    response.render('generic');
});
app.get('/index.html', (request, response) => {
    response.render('home', {
        nombre: 'Mary Franco',
        titulo: 'Curso node'
    });
});

app.get('/hola', (request, response) => {
    response.send("Holi crayoli desde hola")
});

app.get(/.*/, (request, response) => { //wildcard
    response.sendFile(path.resolve(__dirname, 'public/404.html'))
});

app.listen(port, () => {
    console.log("Escuchando el puerto ", port);
})