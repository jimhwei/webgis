let jsonArr = [
  { Name: "Aaron", Latitude: "49.758123", Longitude: "-92.65349" },
  { Name: "Algonquin", Latitude: "45.442046", Longitude: "-78.820583" },
];

let nameMod = jsonArr.map((obj) => {
  return {
    lat: obj.Latitude,
    lng: obj.Longitude,
  };
});
console.log(nameMod);
