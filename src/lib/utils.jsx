import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Icon } from "leaflet";
import L from "leaflet";

export function cls(...classes) {
    return twMerge(clsx(...classes));
}

export function getIconMarker({ width = 40, height = 40, icon }) {
    return new Icon({
        iconUrl: icon,
        iconRetinaUrl: icon,
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [width, height],
        className: "leaflet-venue-icon",
    });
}

export function calculateTotalDistance(positions) {
    let totalDistance = 0;

    for (let i = 0; i < positions.length - 1; i++) {
        const pointA = L.latLng(positions[i]);
        const pointB = L.latLng(positions[i + 1]);

        // Sumar la distancia entre el punto A y el punto B
        totalDistance += pointA.distanceTo(pointB);
    }

    return formatDistance(totalDistance);
}

const formatDistance = (distanceInMeters) => {
    if (distanceInMeters < 1) {
        // Distancia en milímetros si es menor a 1 metro
        return `${(distanceInMeters * 1000).toFixed(2)} mm`;
    } else if (distanceInMeters < 100) {
        // Distancia en centímetros si es menor a 100 metros
        return `${(distanceInMeters * 100).toFixed(2)} cm`;
    } else if (distanceInMeters < 1000) {
        // Distancia en metros si es menor a 1 kilómetro
        return `${distanceInMeters.toFixed(2)} m`;
    } else {
        // Distancia en kilómetros si es mayor o igual a 1 kilómetro
        return `${(distanceInMeters / 1000).toFixed(2)} km`;
    }
};
