import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const OSRMRouting = () => {
    const map = useMap();

    useEffect(() => {
        // Coordenadas de los puntos A y B (latitud, longitud) en Ecuador
        const start = [-0.1807, -78.4678]; // Quito
        const end = [-2.1894, -79.8891]; // Guayaquil

        // const url = `http://router.project-osrm.org/route/v1/driving/${start.join(",")};${end.join(
        //     ","
        // )}?geometries=geojson`;
        const url = `http://router.project-osrm.org/match/v1/driving/-0.1807,-78.4678;-2.1894,-79.8891?steps=true&geometries=polyline&overview=full&annotations=true`;
        fetch(url)
            .then((response) => {
                // console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                // const route = data.routes[0].geometry.coordinates.map((coord) => [
                //     coord[1],
                //     coord[0],
                // ]);
                // L.polyline(route, { color: "blue", weight: 4 }).addTo(map);
                // map.fitBounds(L.polyline(route).getBounds());
            });
    }, [map]);

    return null;
};

const Tests = () => {
    return (
        <MapContainer
            center={[-1.8312, -78.1834]}
            zoom={6}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <OSRMRouting />
        </MapContainer>
    );
};

export default Tests;
