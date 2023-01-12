
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

    //to King George
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

    //to Production Way
    const Sapperton = [49.224860238697396, -122.88949270294468];
    const Braid = [49.23268213068468, -122.88456287225554];
    const lougheedTownCentre = [49.24875892482227, -122.89717730665];
    const productionWay = [49.25367827613695, -122.91868207173422];

    const toKingGeorge = [
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

    const toProductionWay = [
        [49.20494, -122.90607],
        [49.22486, -122.88949],
        [49.23268, -122.88456],
        [49.24875, -122.89717],
        [49.25367, -122.91868],

    ]

    const blueOption = {color: '#005DAA'};
    const destination = { color: '#5FBCDA' };

    return (
        <MapContainer className={style.map} center={waterfront} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            {/* To King George */}
            <Marker position={waterfront}>
                <Popup>
                Waterfront Station
                </Popup>
            </Marker>

            <Marker position={Burrard}>
                <Popup>
                Burrard Station
                </Popup>
            </Marker>

            <Marker position={Granville}>
                <Popup>
                Granville Station
                </Popup>
            </Marker>

            <Marker position={stadiumChinatown}>
                <Popup>
                Stadium - Chinatown Station
                </Popup>
            </Marker>

            <Marker position={CommercialBroadway}>
                <Popup>
                Commercial-Broadway Station
                </Popup>
            </Marker>

            <Marker position={MainStreet}>
                <Popup>
                Skytrain. <br/> Waterfront.Station
                </Popup>
            </Marker>

            <Marker position={Nanaimo}>
                <Popup>
                MainStreet.Station
                </Popup>
            </Marker>

            <Marker position={Avenue}>
                <Popup>
                 29th Avenue Station
                </Popup>
            </Marker>

            <Marker position={JoyceCollingwood}>
                <Popup>
                Joyce-Collingwood Station
                </Popup>
            </Marker>

            <Marker position={Patterson}>
                <Popup>
                Patterson Station
                </Popup>
            </Marker>

            <Marker position={Metrotown}>
                <Popup>
                Metrotown Station
                </Popup>
            </Marker>

            <Marker position={RoyalOak}>
                <Popup>
                Royal Oak Station
                </Popup>
            </Marker>

            <Marker position={Edmonds}>
                <Popup>
                Edmonds Station
                </Popup>
            </Marker>

            <Marker position={Street}>
                <Popup>
                22nd Street Station
                </Popup>
            </Marker>

            <Marker position={NewWestminster}>
                <Popup>
                New Westminster Station
                </Popup>
            </Marker>

            <Marker position={Columbia}>
                <Popup>
                Columbia Station
                </Popup>
            </Marker>

            <Marker position={ScottRoad}>
                <Popup>
                Scott Road Station
                </Popup>
            </Marker>

            <Marker position={Gateway}>
                <Popup>
                Gateway Station
                </Popup>
            </Marker>

            <Marker position={SurreyCentral}>
                <Popup>
                Surrey Central Station
                </Popup>
            </Marker>

            <Marker position={KingGeorge}>
                <Popup>
                King George Station
                </Popup>
            </Marker>


            {/* To Production Way */}
            <Marker position={Sapperton}>
                <Popup>
                Sapperton Station
                </Popup>
            </Marker>

            <Marker position={Braid}>
                <Popup>
                Braid Station
                </Popup>
            </Marker>

            <Marker position={lougheedTownCentre}>
                <Popup>
                Lougheed Town Centre Station
                </Popup>
            </Marker>

            <Marker position={productionWay}>
                <Popup>
                Production Way - University
                </Popup>
            </Marker>
            

            {/* //destination */}
            <CircleMarker center={[49.18293, -122.84473]} pathOptions={destination} radius={15}>
                <Popup>You reached the end of the Expo line at King George!</Popup>
            </CircleMarker>

            <CircleMarker center={[49.25367, -122.91868]} pathOptions={destination} radius={15}>
                <Popup>You reached the end of the Expo line at Profuction Way!</Popup>
            </CircleMarker>

            <Polyline pathOptions={blueOption} positions={toKingGeorge}/>
            <Polyline pathOptions={blueOption} positions={toProductionWay}/>


        </MapContainer>

    )
}