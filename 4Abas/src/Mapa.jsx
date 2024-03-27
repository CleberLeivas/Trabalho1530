import React from 'react';
import style from './Mapa.module.css'
import Menu from './components/Menu';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export default function Mapa() {
  const position = [51.505, -0.09]
  return(
    <div className={style.firstDiv}>
      <div>
        <Menu/>
      </div>
      <div className={style.wrapMap}>
        <h1>Mapa</h1>
        <br />
        <div>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>,
        </div>
      </div>
    </div>
  );
}
