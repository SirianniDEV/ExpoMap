import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import style from '../../styles/Home.module.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { CircleMarker } from 'react-leaflet/CircleMarker'
import { Polyline } from 'react-leaflet/Polyline'



export default function Map (){

    const waterfront = [49.28594, -123.11129]; 
    const Burrard = [49.285581150633966, -123.12012245876285];
    const Granville = [49.28276795358473, -123.1164699145821];
    const stadiumChinatown = [49.28010484687972, -123.11012142014103];
    const MainStreet = [49.273374980784865, -123.10037145876296];
    const CommercialBroadway = [49.262721001091556, -123.06927941643552];
    const Nanaimo = [49.24844626535717, -123.05598167410812];
    const Avenue = [49.24436337925635, -123.04537402992739];
    const JoyceCollingwood = [49.23855530902799, -123.0317256145831];
    const Patterson = [49.22991271599505, -123.01265107225555];
    const Metrotown = [49.22593989446889, -123.00385127225569];
    const RoyalOak = [49.220193228996386, -122.98845204229738];
    const Edmonds = [49.21254265709066, -122.95914504342];
    const Street = [49.200068725477024, -122.94922489130668];
    const NewWestminster = [49.20159918383558, -122.91263972992837];
    const Columbia = [49.204943945073374, -122.90607708574763];
    const ScottRoad = [49.204575904842045, -122.87402738018886];
    const Gateway = [49.1991136014707, -122.85066387225632];
    const SurreyCentral = [49.18971392944762, -122.84792071458409];
    const KingGeorge = [49.1829310367517, -122.84473292807587];

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
    const destination = { color: '#5FBCDA' };

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

            <Marker position={Burrard}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Granville}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={stadiumChinatown}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={CommercialBroadway}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={MainStreet}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Nanaimo}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Avenue}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={JoyceCollingwood}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Patterson}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Metrotown}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={RoyalOak}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Edmonds}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Street}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={NewWestminster}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Columbia}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={ScottRoad}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={Gateway}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={SurreyCentral}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={KingGeorge}>
                <Popup>
                Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>


            <CircleMarker center={[49.18293, -122.84473]} pathOptions={destination} radius={15}>
                <Popup>You reached your destination!</Popup>
            </CircleMarker>

            <Polyline pathOptions={blueOption} positions={polyline}/>


        </MapContainer>

    )
}