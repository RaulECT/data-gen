/**
 * Created by shado on 20/02/2017.
 */
var express = require( "express" );
var app = express();

var names = require( "./routes/names" );
app.use( '/api/names', names );

app.listen( 3000 , function () {
  console.log( "Running on port 3000." );
} );