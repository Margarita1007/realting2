import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useAppSelector } from "../../../app/hooks";
import MarkerList from "./MarkerList";
import { findCenter } from "../../functions";
import RecenterAutomatically from "./RecenterMap";

const MapCatalog: React.FC = () => {

    const objects = useAppSelector(state => state.objects.objectsGeo);
    const coordinatesObj = objects.map(item => item.geo).filter(item => item[0] !== 0 && item[1] !== 0);
    const center = findCenter(coordinatesObj)
    const zoom:number = 10;

    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <MarkerList/>
            <RecenterAutomatically lat={center[0]} lng={center[1]}/>
        </MapContainer>
    )
}

export default MapCatalog;

