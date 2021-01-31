const locations = [
  {
    OID: 1,
    name: "Old Faithful Lodge",
    PopupInfo: "Cafeteria, Gift Shop, and Cabin Front Desk",
    lat: 44.459415000000035,
    lng: -110.82552899999996,
  },
  {
    OID: 2,
    name: "Old Faithful Inn",
    PopupInfo:
      "Largest log cabin structure.  Rooms, Dining, Bar, Gift Shop, Deck overlooking Old Faithful",
    lat: 44.46012700000006,
    lng: -110.83104399999996,
  },
];

// console.log(locations[0].name)
console.log(locations.length);

// Must be var because i changes
var i = 0;
for (i = 0; i < locations.length; i++) {
  console.log(locations[i].name, locations[i].lng, locations[i].lat);
}

console.log(locations.length);
