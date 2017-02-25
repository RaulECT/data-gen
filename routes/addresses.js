/**
 * Created by shado on 24/02/2017.
 */
var express = require( 'express' );
var addressesGen = require( './../data/addressesGen' );

var router = express.Router();

router.route( '/:num' )
  .all( function ( request, response, next ) {
    var num = request.params.num;
    request.numFake = num;

    next();
  } )

  .get( function ( request, response ) {
    var num = request.numFake;
    var randomAddresses = addressesGen.getRandomAddress( num );

    var answer = { address : randomAddresses };
    response.json( answer );
  } );

module.exports = router;
