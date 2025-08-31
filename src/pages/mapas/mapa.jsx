// src/components/Mapa.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// CSS da Leaflet
import 'leaflet/dist/leaflet.css'; 

// Nosso CSS customizado para o layout de página inteira
import './mapa.css';

const Mapa = () => {
    // As coordenadas de Panambi continuam no centro
    const position = [-28.2916, -53.5014];

    return (
        // Este div é o nosso contêiner de página inteira
        <div className="map-wrapper"> 
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={true} // Habilitei o zoom com o scroll do mouse
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        Estamos aqui! <br /> Panambi, RS.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Mapa;