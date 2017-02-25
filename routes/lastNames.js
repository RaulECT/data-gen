/**
 * Created by shado on 24/02/2017.
 */
var express = require( 'express' );
var lastNamesGen = require( "./../data/lastNameGen" );

var router = express.Router();

router.route( '/:num' )
  .all( function ( request, response, next ) {
    var num = request.params.num;
    request.numFake = num;

    next();
  } )

  .get( function ( request, response ) {
    var num = request.numFake;
    var randomLastNames = lastNamesGen.getRandomLastName( num );

    var answer = { "last_names" : randomLastNames };

    response.json( answer );
  } );

module.exports = router;
