//blog routes

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt : -1})
    .then((result)=>{
        console.log(result);
        res.render('index',{title: 'Home', blogs: result});
    })
    .catch((err)=>{
        console.log(err);
    });
});


app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'Create'});
});


app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        console.log(result);
        res.redirect('/blogs');
    })
    .catch((err)=>{
        console.log(err);
    })
});



app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{blog : result , title : "Details"});
    })
    .catch((err)=>{
        console.log(err);
    })
})



app.delete('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({ redirect : "/blogs"});
    })
    .catch((err)=>{
        console.log(err);
    });
});