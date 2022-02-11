// import packages
import express from 'express';
import ejs from 'ejs';

// create app
const app = express();
// set the view engine
app.set('view engine', 'ejs');
// serve public files
app.use(express.static('public'));

// app routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// spin the server on port 3004
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log('server started at port: ', PORT);
});
