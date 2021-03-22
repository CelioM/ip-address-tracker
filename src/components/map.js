import {useState} from 'react'
import { MapContainer,  TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'


export default function Mapp() {
    function LocationMarker() {
        const [position, setPosition] = useState(map)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
        return position === map ? (
            <Marker position={position.locate()}>
                <Popup>You are here!</Popup>
            </Marker>
        ) : null
    }

    return(
        <div>    
            <MapContainer  center={[41.8905, 12.4942]} zoom={13} scrollWheelZoom={false} className='map'>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
                <LocationMarker/>
            </MapContainer>
        </div>
    )
}
