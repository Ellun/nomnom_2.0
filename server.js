const express = require ( 'express' );
const logger  = require ( 'morgan' );
const path    = require ( 'path' );
const port    = 3000;

const app = express (); // initiates express
const userRoutes = require(path.join( __dirname, '/routes/users'));
app.use(logger ('dev') ); // logger for res/req

app.use(express.static(path.join(__dirname, 'public'))); // allows us to access public folder

app.use('/users', userRoutes);

app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html')) // directs to index.html page
})

app.listen(port, () => { // listens for port
  console.log('Ayyyeeeeeee Sexyyy Lady! ', port); //Gangnam Style
});
