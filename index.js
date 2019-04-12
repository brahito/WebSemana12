var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    var contexto = {
        titulo: "puto el que lo lea",
        
    };
    response.render('home', contexto);
});
app.post('/login',function(request,response){
console.log('hello there');
response.send('hello there');
});

app.listen(3000);