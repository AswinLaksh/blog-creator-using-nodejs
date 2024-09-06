const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');
const Blog = require('./models/blogs');

//express app
const app = express();

//connect to mongodb
const db = 'mongodb+srv://sampleacc:test1234@nodetutorial.bpw6ha8.mongodb.net/node_tuts?retryWrites=true&w=majority&appName=nodetutorial';

mongoose.connect(db).then((result)=>{
   app.listen(3000,()=>console.log('Listening on port 3000!'));
}).catch((err)=>console.log(err));


//register view engine
app.set('view engine','ejs');


// app.listen(3000,()=>{
//     console.log("Listening on port 3000!");
// });

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// app.use((req,res,next)=>{
//     console.log('New request made');
//     console.log('host:',req.hostname);
//     console.log('path:',req.path);
//     console.log('method:',req.method);
//     console.log("-----------------");
//     next();
// });

app.use(morgan('dev'));


//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title: 'my new blog 3',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });
//     blog.save().
//     then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// });

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>console.log(err));
// });


// app.get('/single-blog',(req,res)=>{
//     Blog.findById("669be010bd684db41fc6352a")
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// })


//normal get requests
app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');
    //res.sendFile('C:/VScode/nodejs_project/node_proj_2/views/index.html');
    //res.sendFile('./views/index.html',{root:__dirname});


    // const blogs = [
    //     {title:"Yoshi finds eggs",snippet:"Lorem ipsum dolor sit amet, consectetur"},
    //     {title:"Mario Kart Game",snippet:"Lorem ipsum dolor sit amet, consectetur"},
    //     {title:"Thatha vararu kadhara vida poraru",snippet:"Lorem ipsum dolor sit amet, consectetur"},
    // ]
    // res.render('index',{title : 'Home',blogs: blogs});

    res.redirect('/blogs');
});


app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title : 'About'});
});

//redirects

// app.get('/',(req,res)=>{
//     res.redirect('/about');
// });



//404 page
app.use((req,res)=>{
    //res.status(404).sendFile('./views/notfound.html',{root:__dirname});
    res.status(404).render('notfound',{title : '404'});
});