// A record collection can be cataloged in a complex data structure  

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop !== "tracks") {
    if (value.length > 0) {
      collection[id].album = value;
    }
  }
  else if (prop == "tracks") {
    if (collection[id].hasOwnProperty(prop)) {
      collection[id].prop.push(value);
    }
    else {
      var a = [];
      a = a.push(value);
      collection[id].tracks = a;
    }
  }
  if (value.length == 0) {
    delete collection[id].prop;
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
