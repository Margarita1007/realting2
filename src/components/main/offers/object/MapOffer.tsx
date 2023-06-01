import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { cards } from '../../teasers/data';

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
                    <Marker position={offer.geo}>
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