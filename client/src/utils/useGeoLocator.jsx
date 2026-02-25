import * as turf from '@turf/turf';
import { useEffect, useState } from "react";
import hostelArea from '../features/geomap/geomap.json';

const polygon = hostelArea.features[0];
const bufferedArea = turf.buffer(polygon, 30, {units:'meters'});

const checkInside =  (lat, lng) => {
  const point = turf.point([lng, lat]);
  const inside = turf.booleanPointInPolygon(point,bufferedArea );
  return inside;
}
const useGeoLocator = () => {
  const [isStudentInside, setIsStudentInside] = useState(null);

  useEffect(()=>{

    navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    
    setIsStudentInside(checkInside(lat, lng));
    }, 
    (err) =>{
      console.log('Location error:',err);
    }
  );
  },[]);

  //using useEffect so that it runs only once
  console.log(isStudentInside);

  return isStudentInside;
};

export default useGeoLocator;
