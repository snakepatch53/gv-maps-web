import { createContext, useEffect, useState } from "react";
import {
    getMarkers,
    newMarker,
    moveMarker as _moveMarker,
    destroyMarker,
} from "../services/markers";

// 1. Crear el contexto
export const MarkersContext = createContext();

// 2. Crear el provider
export function MarkersProvider({ children }) {
    const [markers, setMarkers] = useState(null);

    useEffect(() => {
        getMarkers().then((data) => {
            setMarkers(data);
        });
    }, []);

    const addMarker = (marker) => {
        newMarker(marker).then((res) => {
            setMarkers(res.data);
        });
    };

    const moveMarker = (e, marker_id) => {
        const { lat, lng } = e.target.getLatLng();
        _moveMarker(marker_id, { latitude: lat, longitude: lng }).then((res) => {
            setMarkers(res.data);
        });
    };

    const removeMarker = (marker_id) => {
        destroyMarker(marker_id).then((res) => {
            setMarkers(res.data);
        });
    };

    return (
        <MarkersContext.Provider
            value={{
                markers,
                addMarker,
                moveMarker,
                removeMarker,
            }}
        >
            {children}
        </MarkersContext.Provider>
    );
}
