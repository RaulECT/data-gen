/**
 * Created by shado on 27/02/2017.
 */
var express = require( 'express' );
var imgesGen = require( "./../data/imagesRan" );

var router = express.Router();

router.route( '/:num' )
  .all( function ( request, response, next ) {
    var num = request.params.num;
    request.numFake = num;

    next();
  } )

  .get( function ( request, response ) {
    var num = request.numFake;
    var randomImages = imgesGen.getRandomImg( num );

    var answer = { "answer" : randomImages };
    response.json( answer );
  } );

module.exports = router;
