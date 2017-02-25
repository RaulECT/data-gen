/**
 * Created by shado on 20/02/2017.
 */
var express = require( 'express' );
var firstNameGen = require( "./../data/firstNameGen" );

var router = express.Router();

router.route( '/:num' )
  .all( function ( request, response, next ) {
    var num = request.params.num;
    request.numFake = num;

    next();
  } )

  .get( function ( request, response ) {
    var num = request.numFake;
    var randomFirstsNames = firstNameGen.getRandomFirstName( num );

    var answer = { "first_names" : randomFirstsNames };
    response.json( answer );
  } );

module.exports = router;
