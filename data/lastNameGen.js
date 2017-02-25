/**
 * Created by shado on 24/02/2017.
 */
var lastNames = [ 'SMITH', 'JOHNSON', 'WILLIAMS', 'BROWN', 'JONES', 'MILLER', 'DAVIS', 'GARCIA', 'RODRIGUEZ', 'WILSON',
                  'MARTINEZ', 'ANDERSON', 'TAYLOR', 'THOMAS', 'HERNANDEZ', 'MOORE', 'MARTIN', 'JACKSON', 'THOMPSON',
                  'WHITE', 'LOPEZ', 'LEE', 'GONZALEZ', 'HARRIS', 'CLARK', 'LEWIS', 'ROBINSON', 'WALKER', 'PEREZ',
                  'HALL', 'YOUNG', 'ALLEN', 'SANCHEZ', 'WRIGHT', 'KING', 'SCOTT', 'GREEN', 'BAKER', 'ADAMS'];

exports.getRandomLastName = function ( numFakes ) {
  var randomLastNames = [];

  for( i=0; i<numFakes; i++ ) {
    var randomLastName = Math.floor( ( Math.random() * lastNames.length ) + 1 );
    randomLastNames.push( lastNames[ randomLastName ] );
  }

  return randomLastNames;
};
