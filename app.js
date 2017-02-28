/**
 * Created by shado on 20/02/2017.
 */
var express = require( "express" );
var app = express();

var names = require( "./routes/names" );
var firstsNames = require( "./routes/firstsNames" );
var lastNames = require( "./routes/lastNames" );
var addresses = require( "./routes/addresses" );
var tel = require( "./routes/tel" );
var images = require( "./routes/images" );

app.use( express.static( 'data/images' ) );

app.use( '/api/names', names );
app.use( '/api/firstsNames', firstsNames );
app.use( '/api/lastNames', lastNames );
app.use( '/api/addresses', addresses );
app.use( '/api/tel', tel );
app.use( '/api/images', images );

app.listen( 3000 , function () {
  console.log( "Running on port 3000." );
} );