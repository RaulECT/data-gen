/**
 * Created by shado on 24/02/2017.
 */
var addresses = [ "8785 Windfall St.Whitehall, PA 18052", "1 N. Cactus Ave.Green Bay, WI 54302", "711 Old York Drive Richmond, VA 23223",
                  "77 Winchester Lane Coachella, CA 92236", "665 Clinton Lane Wilkes Barre, PA 18702",
                  "787 Lakeview St.Marion, NC 28752", "39 Marsh Dr. Michigan City, IN 46360", "872 Littleton Street Indian Trail, NC 28079",
                  "187 Park Rd. Oak Creek, WI 53154", "330 Plymouth Rd. North Olmsted, OH 44070", "856 Hillcrest Dr. Roy, UT 84067",
                  "434 Carpenter St. Solon, OH 44139", "624 Pennington Dr. La Crosse, WI 54601", "7118 S. Railroad Lane Louisville, KY 40207",
                  "904 W. Cedar Swamp Drive Batavia, OH 45103", "781 E. Lilac Street Petersburg, VA 23803", "216 W. Mayflower Drive Apt 700 Riverview, FL 33569" ];

exports.getRandomAddress = function ( numFakes ) {
  var randomAddresses = [];

  for( i=0; i<numFakes; i++ ) {
    var randomAddress = Math.floor( ( Math.random() * addresses.length ) + 1 );
    randomAddresses.push( addresses[ randomAddress ] );
  }

  return randomAddresses;
};
