import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { cards } from '../../teasers/data';
import L from "leaflet";

const customIcon = new L.Icon({
    iconUrl: require('../../../../assets/icons/locationFill.svg').default,
    iconSize: new L.Point(40, 47),
  })

const MapOffer: React.FC = () => {
    const { id } = useParams();
    const offer = cards.find((card) => card.id === id);
    if (offer) {
        return (
            <MapContainer center={offer.geo} zoom={13}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <Marker position={offer.geo} icon={customIcon}>
                    </Marker>
            </MapContainer>
        )
    }

    return (
        <div>
            Не найдено
        </div>
    )
}

export default MapOffer;