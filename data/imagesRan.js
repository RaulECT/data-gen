/**
 * Created by shado on 27/02/2017.
 */
var images = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg",
                "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.png", "12.jpg",
                "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg",
                "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg" ];

var host = "http://localhost:3000/";

exports.getRandomImg = function ( numFakes ) {
  var randomImgs = [];

  for( i=0; i<numFakes; i++ ) {
    var randomImg = Math.floor( ( Math.random() * images.length ) + 1 );
    randomImgs.push( host + images[ randomImg ] );
  }

  return randomImgs;
};
