import express from 'express';
import config from './config';
import apiRouter from './api';


//create express
const server = express();


//server side routing support all get post etc...
server.get('/',(req,res) => {
  res.render('index',{
    content: ' Hello Dynamic view engin ejs!'
  });
});

//view engine currently ejs
server.set('view engine','ejs');

//set the api Router
server.use('/api',apiRouter);

//server side routing support all get post etc...
server.use(express.static('public'));
// server.get('/about.html',( req, res ) => {
//   fs.readFile('./public/about.html', ( err , data )=>{
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () =>{
  console.info('Express is litening at port : ',config.port);
});
