import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from "leaflet";
//import { LatLngTuple } from 'leaflet';
import { cards, coordinates } from "./data";
import ShortCardTemplate from "./ShortCard";
import "leaflet/dist/leaflet.css";

const MapCatalog: React.FC = () => {

    const customIcon = new L.Icon({
        iconUrl: require('../../../assets/icons/locationFill.svg').default,
        iconSize: new L.Point(40, 47),
      })

   
    const findCenter: () => [number, number] = () => {
        if (coordinates.length === 0) {
          return [0, 0];
        }
    
        let sumLat = 0;
        let sumLng = 0;
    
        for (let i = 0; i < coordinates.length; i++) {
          sumLat += coordinates[i][0];
          sumLng += coordinates[i][1];
        }
    
        const centerLat = sumLat / coordinates.length;
        const centerLng = sumLng / coordinates.length;
    
        return [centerLat, centerLng];
    };
    
    const center = findCenter();

    const markers = cards.map((card) => {
        return card
    })
    const zoom:number = 10;

    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
                onClick={(e) => console.log('onClick', e.target)}
                chunkedLoading
                >
                {markers.map((marker) => (
                    <Marker position={marker.geo} key={marker.id} icon={customIcon}>
                        <Popup>
                            <div onClick={() => console.log('onClick', marker.geo)}>
                                <ShortCardTemplate {...marker} />
                            </div>
                            
                            
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>

            

        </MapContainer>
    )
}

export default MapCatalog;

