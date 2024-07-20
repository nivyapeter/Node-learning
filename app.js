const express = require('express');

// express app

const app = express();

// register view engine

app.set('view engine', 'ejs');

// listen for request

app.listen(3000);

app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    const blogs = [{
        title: "Yoshi", snippet: "lorem ipsum",
        title: "finds", snippet: "lorem ipsum", 
        title: "eggs", snippet: "lorem ipsum"
    }]
    res.render('index',{title:'Home',blogs})
})

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about')
})

app.get('/blogs/create', (req, res) => {
    res.render('create');
})

// redirect

app.get('/about-us', (req, res) => {
    res.redirect('/about')
});

app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname })
})