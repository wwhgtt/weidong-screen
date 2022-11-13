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
      "color": "#0e3155ff"
  }
}, {
  "featureType": "manmade",
  "elementType": "geometry",
  "stylers": {
      "color": "#242f3eff"
  }
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": {
      "color": "#17263cff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#9e7d60ff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#554631ff"
  }
}, {
  "featureType": "districtlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#cfd6e5ff"
  }
}, {
  "featureType": "districtlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#17263cff",
      "weight": 3
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#cfd6e5ff"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#17263cff",
      "weight": 3
  }
}, {
  "featureType": "subway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "railway",
  "elementType": "geometry",
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
  "featureType": "provincialwaysign",
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
  "featureType": "nationalwaysign",
  "elementType": "labels.icon",
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
  "featureType": "highwaysign",
  "elementType": "labels.icon",
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
  "featureType": "green",
  "elementType": "geometry",
  "stylers": {
      "color": "#263b3eff"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#d0021bff"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#ffffffff"
  }
}, {
  "featureType": "city",
  "elementType": "labels",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "city",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#cfd6e5ff"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#17263cff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#ffffff00"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#cfd6e5ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#554631fa"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.icon",
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
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "otherlabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "otherlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#d69563ff"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#17263cff"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,9",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,9",
      "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,9",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,9",
      "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,9",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,9",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,10",
      "level": "10"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,10",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,10",
      "level": "10"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,10",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,10",
      "level": "10"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,10",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,10",
      "level": "10"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.topfill",
  "stylers": {
      "color": "#2a3341ff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.sidefill",
  "stylers": {
      "color": "#313b4cff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#1a212eff"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#034b64ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#1a2e1cff"
  }
}, {
  "featureType": "local",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text.fill",
  "stylers": {
      "color": "#d69563ff"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text.stroke",
  "stylers": {
      "color": "#17263cff"
  }
}, {
  "featureType": "subwaystation",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "estate",
  "elementType": "geometry",
  "stylers": {
      "color": "#2a3341ff"
  }
}];

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