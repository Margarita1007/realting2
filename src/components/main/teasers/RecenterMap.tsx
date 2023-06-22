import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';


const RecenterAutomatically: React.FC<{lat: number, lng: number}> = ({lat,lng}) => {
    const map = useMap();

     useEffect(() => {
       map.setView([lat, lng]);
     }, [lat, lng, map]);
     
    return null;
   }

   export default RecenterAutomatically;