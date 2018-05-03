var map = L.map("map", {
    center: [48.3689, -98.5795],
    zoom: 4
  });
  
  let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
  let accessToken = 'pk.eyJ1IjoiZGhhdmVuIiwiYSI6ImNqZng1dDA4dTAzb3QycW55bnE4eWExZjIifQ.abVnsWaVFEKaAcq-bn3Vqg';
  let myLayer = L.tileLayer(mapboxUrl, {id: 'mapbox.streets', maxZoom: 20, accessToken: accessToken});
  myLayer.addTo(map);
  
  var link = "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces.geojson";
  // var link2 = d3.json("json.json")
  
  
  // Function that will determine the color of a neighborhood based on the borough it belongs to
  function chooseColor(name) {
    switch (name) {
      case "Kansas":
        return "yellow";
      case "Missouri":
        return "blue";
      case "New Jersey":
        return "green";
      case "Virginia":
        return "green";
      case "Alaska":
        return "blue";
      case "Arkansas":
        return "green";
      case "New York":
        return "green";
      case "Texas":
        return "blue";
      case "Mississippi":
        return "green";
      case "California":
        return "green";
      case "Colorado":
        return "green";
      case "Oklahoma":
        return "green";
      case "Montana":
        return "green";
      case "Idaho":
        return "green";
      case "Washington":
        return "green";
      case "Oregon":
        return "green";
      case "North Dakota":
        return "green";
      case "South Dakota":
        return "green";
      case "Nebraska":
        return "green";
      case "Alabama":
        return "green";
      case "Nevada":
        return "green";
      case "Utah":
        return "green";
      case "Florida":
        return "green";
      case "Louisiana":
        return "green";
      case "Georgia":
        return "green";
      case "Iowa":
        return "green";
      case "South Carolina":
        return "green";
      case "North Carolina":
        return "green";
      case "Wyoming":
        return "green";
      case "Arizona":
        return "green";
      case "Illinois":
        return "green";
      case "Kentucky":
        return "green";
      case "Tennessee":
        return "green";
      case "Indiana":
        return "green";
      case "Maryland":
        return "green";
      case "Delaware":
        return "green";
      case "Washington D.C.":
        return "green";
      case "Connecticut":
        return "green";
      case "West Virginia":
        return "green";
      case "Pennsylvania":
        return "green";
      default:
        return "green";
        opacity: 0.5;
    }
  }
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "AL",
        "amenity": "University",
        "popupContent": "Montgomery"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-86.279118, 32.361538]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "AK",
        "amenity": "University",
        "popupContent": "Juneau"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-134.419740, 58.301935]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "AZ",
        "amenity": "Army Base",
        "popupContent": "Phoenix"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-112.073844, 33.448457]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "AR",
        "amenity": "Air Force Base",
        "popupContent": "Little Rock"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-92.331122, 34.736009]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "CA",
        "amenity": "School",
        "popupContent": "Sacramento"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-121.468926, 38.555605]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "CO",
        "amenity": "Hospital",
        "popupContent": "Denver"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.984167, 39.7391667]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "CT",
        "amenity": "House",
        "popupContent": "Hartford"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.67, 41.767]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  

  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "DE",
        "amenity": "School",
        "popupContent": "Dover"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-75.526755, 39.161921]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "FL",
        "amenity": "Hospital",
        "popupContent": "Tallahassee"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-84.27277, 30.4518]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "GA",
        "amenity": "House",
        "popupContent": "Atlanta"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-84.39, 33.76]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "HI",
        "amenity": "University",
        "popupContent": "Honolulu"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-157.826182, 21.30895]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "ID",
        "amenity": "University",
        "popupContent": "Boise"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-116.237651, 43.613739]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "IL",
        "amenity": "Army Base",
        "popupContent": "Springfield"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-89.650373, 39.783250]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "IN",
        "amenity": "Air Force Base",
        "popupContent": "Indianapolis"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-86.147685, 39.790942]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "IA",
        "amenity": "School",
        "popupContent": "Des Moines"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-93.620866, 41.590939]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "KS",
        "amenity": "Hospital",
        "popupContent": "Topeka"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-95.69, 39.04]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "KY",
        "amenity": "House",
        "popupContent": "Frankfort"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-84.86311, 38.197274]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  

  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "LA",
        "amenity": "School",
        "popupContent": "Baton Rouge"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-91.140229, 30.45809]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "ME",
        "amenity": "Hospital",
        "popupContent": "Augusta"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-69.765261, 44.323535]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "MD",
        "amenity": "House",
        "popupContent": "Annapolis"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-76.501157, 38.972945]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "MA",
        "amenity": "University",
        "popupContent": "Boston"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-71.0589, 42.3601]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "MI",
        "amenity": "University",
        "popupContent": "Lansing"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-84.5467, 42.7335]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "MN",
        "amenity": "Army Base",
        "popupContent": "Saint Paul"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-93.094, 44.95]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "MS",
        "amenity": "Air Force Base",
        "popupContent": "Jackson"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-90.207, 32.320]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "MO",
        "amenity": "School",
        "popupContent": "Jefferson City"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-92.189283, 38.572954]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "MT",
        "amenity": "Hospital",
        "popupContent": "Helana"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-112.027031, 46.595805]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "NE",
        "amenity": "House",
        "popupContent": "Lincoln"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-96.675345, 40.809868]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  

  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "NV",
        "amenity": "School",
        "popupContent": "Carson City"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-119.753877, 39.160949]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "NH",
        "amenity": "Hospital",
        "popupContent": "Concord"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-71.549127, 43.220093]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "NJ",
        "amenity": "House",
        "popupContent": "Trenton"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-74.756138, 40.221741]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "NM",
        "amenity": "University",
        "popupContent": "Santa Fe"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-105.964575, 35.667231]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "NY",
        "amenity": "University",
        "popupContent": "Albany"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-73.781339, 42.659829]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "NC",
        "amenity": "Army Base",
        "popupContent": "Raleigh"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-78.638, 35.771]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "ND",
        "amenity": "Air Force Base",
        "popupContent": "Bismarck"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-100.779004, 46.8083]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "OH",
        "amenity": "School",
        "popupContent": "Columbus"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-83.000647, 39.962245]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "OK",
        "amenity": "Hospital",
        "popupContent": "Oklahoma City"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-97.534994, 35.482309]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "OR",
        "amenity": "House",
        "popupContent": "Salem"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-123.029159, 44.931109]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  

  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "PA",
        "amenity": "School",
        "popupContent": "Harrisburg"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-76.875613, 40.269789]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "RI",
        "amenity": "Hospital",
        "popupContent": "Providence"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-71.422132, 41.82355]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "SC",
        "amenity": "House",
        "popupContent": "Columbia"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-81.035, 34.000]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "SD",
        "amenity": "University",
        "popupContent": "Pierre"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-100.336378, 44.367966]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "TN",
        "amenity": "University",
        "popupContent": "Nashville"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-86.784, 36.165]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "TX",
        "amenity": "Army Base",
        "popupContent": "Austin"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-97.75, 30.266667]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "UT",
        "amenity": "Air Force Base",
        "popupContent": "Salt Lake City"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-111.892622, 40.7608]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "VT",
        "amenity": "School",
        "popupContent": "Montpelier"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.57194, 44.26639]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "VA",
        "amenity": "Hospital",
        "popupContent": "Richmond"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-77.46, 37.54]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "WA",
        "amenity": "House",
        "popupContent": "Olympia"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-122.893077, 47.042418]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  

  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "WV",
        "amenity": "School",
        "popupContent": "Charleston"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-81.633294, 38.349497]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "WI",
        "amenity": "Hospital",
        "popupContent": "Madison"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-89.384444, 43.074722]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "WY",
        "amenity": "House",
        "popupContent": "Cheyenne"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.802042, 41.145548]
    }
  };
  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
  


  
  
  // Grabbing our GeoJSON data..
  d3.json(link, function(data) {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
      // Style each feature (in this case a neighborhood)
      style: function(feature) {
        return {
          color: "white",
          // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
          fillColor: chooseColor(feature.properties.name),
          fillOpacity: 0.5,
          weight: 1.5
        };
      },
      // Called on each feature
      onEachFeature: function(feature, layer) {
        // Set mouse events to change map styling
        layer.on({
          // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
          mouseover: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.2
            });
          },
          // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
          mouseout: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.5
            });
          },
          // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
          click: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 1.0
            })
            map.fitBounds(event.target.getBounds());
          }
        });
        // Giving each feature a pop-up with information pertinent to it
        layer.bindPopup("<h1>" + feature.properties.name + " (" + feature.properties.name_alt + ")" + "</h1> <hr> <h2>" + feature.properties.region + ", " + feature.properties.region_big + "<hr>" + "<a href= '" + feature.properties.wikipedia + "', target=_blank>" + "Link to State Wikipedia page" + "</h2>");
        
      }
    }).addTo(map);
  });
  
  