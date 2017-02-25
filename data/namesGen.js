/**
 * Created by shado on 20/02/2017.
 */
var names = [ "Josu Renata", "Kóri Akilina", "Yenifer Grishma", "Cristiano Sofija",
              "Lasse Eutychus", "Conchita Jacob", "Babur Murat", "Alp Gavrila", "Godwine Siwan",
              "Mia Zaki", "Daria Henderson", "Demetra Vivek", "Joi Dragutin", "Afanasiy Yeriyahu",
              "Robert Esther", "Igon Biljana", "Sunder Elis", "Tinashe Atanase", "Ingibjörg Havel",
              "Sima Xenon", "Konrád Karthik", "Sindri Chibuike", "Racquel Iliana", "Sebastian Bekki",
              "Rebekka Roope", "Venceslao Sekhar", "Xochitl Clíodhna", "Ratko Lanny", "Dipika Jure",
              "Pavel Natanael", "Akanksha Chiranjivi", "Gandalf Lalla", "Wandalin Conor"];

exports.getRandomName = function ( numFakes ) {
  var randomNames = [];

  for( i=0; i<numFakes; i++ ) {
    var randomName = Math.floor( ( Math.random() * names.length ) + 1 );
     randomNames.push( names[ randomName ] );
  }

  return randomNames;
};
