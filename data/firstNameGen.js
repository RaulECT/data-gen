/**
 * Created by shado on 20/02/2017.
 */
var firstNames = [ "Zacchaeus", "Evangelina", "Binyamin", "Jytte", "Leila", "Hadewig", "Aris", "Abihu",
                   "Dimitri", "Saulius", "Tjaard", "Liliana", "Burhan", "George", "Mukesh", "Appius",
                   "Rasel", "Kai", "Viggo","Savanna", "Zak", "Leon", "Errol", "Rainbow", "Beth",
                   "Blanche", "Acacia", "Livvy", "Alexandrina", "Hale", "Joselyn", "Catherina"];

exports.getRandomFirstName = function ( numFakes ) {
  var randomFirstsNames = [];

  for( i=0; i<numFakes; i++ ) {
    var randomName = Math.floor( ( Math.random() * firstNames.length ) + 1 );
    randomFirstsNames.push( firstNames[ randomName ] );
  }

  return randomFirstsNames;
};