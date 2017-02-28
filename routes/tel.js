/**
 * Created by shado on 25/02/2017.
 */
var express = require( 'express' );
var telGen = require( './../data/telephonesGen' );

var router = express.Router();

router.route( '/:num' )
  .all( function ( request, response, next ) {
    var num = request.params.num;
    request.numFake = num;

    next();
  } )

  .get( function ( request, response ) {
    var num = request.numFake;
    var randomTel = telGen.getRandomTel( num );

    var answer = { tel : randomTel };
    response.json( answer );
  } );

module.exports = router;


