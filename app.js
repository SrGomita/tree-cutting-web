const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'css')));

app.engine('hbs', exphbs.engine({ extname: '.hbs', partialsDir: path.join(__dirname, 'partials') }));
app.set('view engine', 'hbs');
app.set('views', __dirname);

app.get('/', (req, res) => res.render('index'));
app.get('/services', (req, res) => res.render('services'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));