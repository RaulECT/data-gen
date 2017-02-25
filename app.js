/**
 * Created by shado on 20/02/2017.
 */
var express = require( "express" );
var app = express();

var names = require( "./routes/names" );
var firstsNames = require( "./routes/firstsNames" );

app.use( '/api/names', names );
app.use( '/api/firstsNames', firstsNames );

app.listen( 3000 , function () {
  console.log( "Running on port 3000." );
} );