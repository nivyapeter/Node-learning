const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const blogRoute =  require('./routes/blogRoutes');

// express app

const app = express();

// connect to mongo db
const dbUrl = "mongodb+srv://netninja:test1234@nodetuts.clcdvie.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbUrl, {}).then((result) => app.listen(3000)).catch((err) => console.log(err));

// register view engine

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog2',
        snippet: 'about my new blog2',
        body: 'more about my new blog2'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
});

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

// blog routes

app.use('/blogs',blogRoute);

// listen for request

// app.listen(3000);

// app.get('/', (req, res) => {
//     // res.sendFile('./views/index.html', { root: __dirname });
//     const blogs = [{
//         title: "Yoshi", snippet: "lorem ipsum",
//         title: "finds", snippet: "lorem ipsum",
//         title: "eggs", snippet: "lorem ipsum"
//     }]
//     res.render('index', { title: 'Home', blogs })
// })

// app.get('/about', (req, res) => {
//     // res.sendFile('./views/about.html', { root: __dirname });
//     res.render('about')
// })

// redirect

app.get('/about-us', (req, res) => {
    res.redirect('/about')
});

// app.use((req, res) => {
//     res.sendFile('./views/404.html', { root: __dirname })
// })