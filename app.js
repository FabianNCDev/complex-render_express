const express = require('express'),
      path    = require('path'),
      ejs     = require('ejs');

var app= express();

app.locals.appName='F_App';

app.set('view engine','jade');
app.set('views',path.resolve(__dirname,'views'));
app.engine('html',ejs.renderFile);

app.use((req,res,next)=>{
  res.locals.userAgent=req.headers['user-agent'];//app.locals.userAgent=req.headers['user-agent'];
  next();
});
app.get('/profile',(req,res)=>{
  res.render('profile.ejs',{
    name: "Tony Hawk",
    birthyear: 1968,
    career: "skateboarding",
    bio: "<b>Tony Hawk</b> is the coolest skateboarder around."
  });
});

app.get('/about',(req,res)=>{
  res.render('about',{
    currentUser:'fabian123'
  });
});

app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
});

app.use((req,res)=>{
  res.status(404);
  res.render('404.html',{
    urlAtempted:req.url
  });
});

app.listen(3000);
