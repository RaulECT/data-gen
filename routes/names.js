/**
 * Created by shado on 20/02/2017.
 */
var express = require( "express" );
var bodyParser = require( "body-parser" );
var namesGen = require( "./../data/namesGen" );

var router = express.Router();
var parseUrlencoded = bodyParser.urlencoded( {extended:false} );

router.route( '/:num' )
  .all( function ( request, response, next ) {
    var num = request.params.num;
    request.numFake = num;

    next();
  } )

  .get( function ( request, response ) {
    var num = request.numFake;
    var randomNames = namesGen.getRandomName( num );

    var answer = { names : randomNames };
    response.json( answer );
  } );

module.exports = router;