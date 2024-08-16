import { useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Tests() {
    const [positions, setPositions] = useState([
        [51.505, -0.09],
        [51.51, -0.1],
        [51.515, -0.11],
    ]);

    console.log(positions);

    const handleLineClick = (e) => {
        const clickedLatLng = e.latlng;

        // Encontrar el par de puntos más cercano
        let closestIndex = 0;
        let minDistance = Infinity;

        for (let i = 0; i < positions.length - 1; i++) {
            const latlng1 = positions[i];
            const latlng2 = positions[i + 1];

            // Calcular el punto medio
            const middleLatLng = {
                lat: (latlng1[0] + latlng2[0]) / 2,
                lng: (latlng1[1] + latlng2[1]) / 2,
            };

            // Calcular la distancia desde el punto clickeado al punto medio
            const distance = Math.sqrt(
                Math.pow(clickedLatLng.lat - middleLatLng.lat, 2) +
                    Math.pow(clickedLatLng.lng - middleLatLng.lng, 2)
            );

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }

        // Calcular el nuevo punto medio entre los dos puntos más cercanos
        const newPoint = [
            (positions[closestIndex][0] + positions[closestIndex + 1][0]) / 2,
            (positions[closestIndex][1] + positions[closestIndex + 1][1]) / 2,
        ];

        // Insertar el nuevo punto en la lista de posiciones
        const newPositions = [
            ...positions.slice(0, closestIndex + 1),
            newPoint,
            ...positions.slice(closestIndex + 1),
        ];

        setPositions(newPositions);
    };

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polyline
                positions={positions}
                color="blue"
                weight={5}
                eventHandlers={{
                    click: handleLineClick,
                }}
            />
            {positions.map((position, index) => (
                <Marker key={index} position={position} />
            ))}
        </MapContainer>
    );
}
