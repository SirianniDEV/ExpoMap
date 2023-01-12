import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility'

import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import { polyline } from 'leaflet'

export default function Map (){

    const waterfront = [49.28594, -123.11129]; 
    const polyline = [
        [49.28594, -123.11129],
        [49.28558, -123.12012],
        [49.28276, -123.11646],
        [49.28010, -123.11012],
        [49.27337, -123.10037],
        [49.26272, -123.06927],
        [49.24844, -123.05598],
        [49.24436, -123.04537],
        [49.23855, -123.03172],
        [49.22991, -123.01265],
        [49.22593, -123.00385],
        [49.22019, -122.98845],
        [49.21254, -122.95914],
        [49.20006, -122.94922],
        [49.20159, -122.91263],
        [49.20494, -122.90607],
        [49.20457, -122.87402],
        [49.19911, -122.85066],
        [49.18971, -122.84792],
        [49.18293, -122.84473],
    ]

    const blueOption = {color: '#005DAA'};

    return (
        <MapContainer className={style.map} center={waterfront} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={waterfront}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Polyline pathOptions={blueOption} positions={polyline}/>

        </MapContainer>

    )
}