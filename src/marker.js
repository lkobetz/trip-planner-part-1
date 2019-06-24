const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {
  let icon = document.createElement('div');
  icon.style.width = '32px';
    icon.style.height = '39px';
  if (type === 'hotel') {
    icon.style.backgroundImage = iconURLs.hotels;
  }
  else if (type === 'restaurant') {
    icon.style.backgroundImage = iconURLs.restaurants;
  }
  else {
    icon.style.backgroundImage = iconURLs.activities;
  }
  return new mapbox.Marker(icon).setLngLat(coords);
};

module.exports = buildMarker;
