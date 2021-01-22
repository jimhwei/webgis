// Documentation on how to use csv to json using npm and node.js
// https://www.npmjs.com/package/csvtojson

const csvfilepath = "ProvincalParksSmall.csv";
const csv = require("csvtojson");
const fs = require("fs");

// csv file is retrieved and uses a promise to handle
csv()
  .fromFile(csvfilepath)
  .then((json) => {
    console.log(json);

    // Output to a parks.json file is required, includes error handling
    // https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
    fs.writeFileSync("parks.json", JSON.stringify(json), "utf-8", (err) => {
      if (err) console.log(err);
    });
  });

// Getting the JSON into the correct format we need for Google document
// https://stackoverflow.com/questions/13391579/how-to-rename-json-key

// Test JSON Key Values
let parkName = [
  { Name: "Aaron", Latitude: "49.758123", Longitude: "-92.65349" },
  { Name: "Algonquin", Latitude: "45.442046", Longitude: "-78.820583" },
];

// Change the Key names, but only return lat and lng
let nameMod = parkName.map((obj) => {
  return {
    lat: obj.Latitude,
    lng: obj.Longitude,
  };
});
console.log(nameMod);
