/**
 * 动态加载百度地图api函数
 * @param {String} ak  百度地图AK，必传
 */
export const BMPGL = (ak) => {
  return new Promise((resolve, reject) => {
    window.init = function () {
      // eslint-disable-next-line
      resolve(BMapGL)
    };
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${ak}&callback=init`;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export const styleJson = [{
  "featureType": "land",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#0e3155ff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#22191dff",
      "visibility": "on"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#130704ff",
      "visibility": "on"
  }
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": {
      "color": "#00648dff",
      "visibility": "off"
  }
}, {
  "featureType": "village",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "town",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "district",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "country",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "continent",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#e2953fff",
      "visibility": "on"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "weight": 3
  }
}, {
  "featureType": "green",
  "elementType": "geometry",
  "stylers": {
      "color": "#00648dff",
      "visibility": "off"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "geometry",
  "stylers": {
      "color": "#2d252cff",
      "visibility": "on"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels.text.stroke",
  "stylers": {
      "weight": 1,
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "continent",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "country",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "city",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#765e4eff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "railway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on",
      "weight": 90
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "shopping",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648d00",
      "visibility": "on"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text",
  "stylers": {
      "fontsize": 24
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#1c4f7eff",
      "visibility": "on"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#1c4f7eff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "weight": 3
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#1c4f7eff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "weight": 3
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#9b633fff",
      "visibility": "on"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#7d4017ff",
      "visibility": "on"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#7d4017ff",
      "visibility": "on"
  }
}, {
  "featureType": "local",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff",
      "visibility": "on"
  }
}, {
  "featureType": "local",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#765e4eff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff",
      "visibility": "on"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff",
      "visibility": "on",
      "weight": 1
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry",
  "stylers": {
      "weight": 1
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry",
  "stylers": {
      "weight": 1
  }
}, {
  "featureType": "local",
  "elementType": "geometry",
  "stylers": {
      "weight": 1,
      "visibility": "off"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "weight": 3
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "weight": 3
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "weight": 3
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,10",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,10",
      "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,10",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,10",
      "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,10",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,10",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,9",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,9",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,9",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,9",
      "level": "9"
  }
}, {
  "featureType": "building",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "subwaystation",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "education",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "medical",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "entertainment",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "estate",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "transportation",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "playground",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "parkinglot",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotsway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "universityway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "highrailway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "roadarrow",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "footbridge",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "crosswalk",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "underpass",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "parkingspace",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "transportation",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff"
  }
}, {
  "featureType": "transportation",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "districtlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#ffffffff"
  }
}, {
  "featureType": "districtlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#00648dff"
  }
}]

// 百度地图绘制边界专用
export const shenZhenMapdata = [
  {code: '440000440300440305', name: '宝安区', val:[113.883943, 22.669366]},
  {code: '440000440300440310', name: '光明区', val:[113.922076, 22.776285]},
  {code: '440000440300440304', name: '南山区', val:[113.932707, 22.526025]},
  {code: '440000440300440303', name: '福田区', val:[114.056889, 22.542849]},
  // 龙华区国内有重名
  {code: '440000440300440301', name: '广东省深圳市龙华区', val:[114.052002, 22.749113]},
  {code: '440000440300440306', name: '龙岗区', val:[114.244024, 22.721913]},
  {code: '440000440300440308', name: '坪山区', val:[114.37338, 22.704844]},
  {code: '440000440300440302', name: '罗湖区', val:[114.125016, 22.573555]},
  {code: '440000440300440307', name: '盐田区', val:[114.237125, 22.597581]},
  {code: '440000440300440309', name: '深圳市大鹏区', val:[114.500723, 22.563143]},
]