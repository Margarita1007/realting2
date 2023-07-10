import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useAppSelector } from '../../../app/hooks';
import L from "leaflet";
import ShortCardTemplate from './ShortCard';

const MarkerList: React.FC = () => {

    const obj = useAppSelector(state => state.objects.objectsGeo);
    const objects = obj.filter(item => item.geo[0] !== 0 && item.geo[1] !== 0);
    
    const customIcon = new L.Icon({
        iconUrl: require('../../../assets/icons/new/Кнопочка.svg').default,
        iconSize: new L.Point(40, 47),
      })

    return (
        <MarkerClusterGroup
            onClick={(e) => console.log('onClick', e.target)}
            chunkedLoading
            >
            {objects.map((marker) => (
                <Marker 
                position={marker.geo} 
                key={marker.id} 
                icon={customIcon}>
                    <Popup>
                        <div>
                            <ShortCardTemplate {...marker} />
                        </div>
                        
                        
                    </Popup>
                </Marker>
            ))}
        </MarkerClusterGroup>
    )
}

export default MarkerList;