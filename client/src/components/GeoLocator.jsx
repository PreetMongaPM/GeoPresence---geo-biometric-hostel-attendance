import * as turf from '@turf/turf';
import { useState } from "react";
import hostelArea from '../features/geomap/geomap.json';

const checkInside =  (lat, long) => {
  const point = turf.point([long, lat]);
  const polygon = hostelArea.features[0];

  const bufferedArea = turf.buffer(hostelArea.features[0], 30, {units:'meters'});

  const inside = turf.booleanPointInPolygon(point,bufferedArea );
  return inside;
}
const GeoLocator = () => {
  const [isStudentInside, setIsStudentInside] = useState("false");

  navigator.geolocation.getCurrentPosition((pos) => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  
  setIsStudentInside(()=>checkInside(lat, lng));
  console.log(lat, lng, checkInside(lat, lng), isStudentInside);
  });
};

export default GeoLocator;
