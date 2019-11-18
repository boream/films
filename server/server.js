var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var lastId = 20;
var films = [{
    id: 1,
    name: 'Spectre 007',
    gender: 'Aventura',
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbUrl: 'http://www.imdb.com/title/tt2379713/'
},{
    id: 2,
    name: 'solo en casa',
    gender: 'Comedia',
    image: 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbUrl: 'http://www.imdb.com/title/tt0099785/'
},{
    id: 3,
    name: 'Mascotas',
    gender: 'Comedia',
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbUrl: 'http://www.imdb.com/title/tt2709768/'}];



app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/api/film', function (req, res) {
    res.json(films);
});

app.get('/api/film/:id', function (req, res) {
    var element = films.find((film) => film.id === +req.params.id);
    if (!element) {
        res.status(404).send('Not found');
        return;
    }
    res.json(element);
});

app.post('/api/film', function (req, res) {
    lastId++;
    var film = req.body;
    film.id = lastId;
    films.push(film);
    res.json({});
});

app.put('/api/film/:id', function (req, res) {
    var find = false;
    var film = req.body;
    films = films.map((data) => {
        if (data.id === +req.params.id) {
            find = true;
            data.name = film.name;
            data.gender = film.gender;
            data.imdbUrl = film.imdbUrl;
            data.image = film.image;
        }
        return data;
    });
    if (!find) {
        res.status(404).send('Not found');
        return;
    }
    res.json({});
});

app.delete('/api/film/:id', function (req, res) {
    var find = false;
    films = films.filter((film) => {
        if (film.id === +req.params.id) {
            find = true;
        }
        return film.id !== +req.params.id;
    });
    if (!find) {
        res.status(404).send('Not found');
        return;
    }
    res.json({});
});

app.listen(3000, function () {
    console.log('films API running in 3000 port!');
});