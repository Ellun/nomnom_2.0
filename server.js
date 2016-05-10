const express = require ( 'express' );
const logger  = require ( 'morgan' );
const path    = require ( 'path' );
const port    = 3000;

const app = express (); // initiates express
app.use( logger ( 'dev' ) ); // logger for res/req

app.use( express.static ( path.join( __dirname, 'public' ) ) ); // allows us to access public folder

app.get( '/' , ( req, res ) => {
  res.sendFile( path.join ( __dirname, 'public/index.html' ) ) // directs to index.html page
})

app.listen( port, () => { // listens for port
  console.log( 'Ayyyeeeeeee Sexyyy Lady! Hi Elton! ', port ); //Gangnam Style
});
