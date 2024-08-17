import { createContext, useEffect, useState } from "react";
import {
    newMarker,
    moveMarker as _moveMarker,
    destroyMarker,
    getMarkersByMapId,
} from "../services/markers";
import { useParams } from "react-router-dom";

// 1. Crear el contexto
export const MarkersContext = createContext();

// 2. Crear el provider
export function MarkersProvider({ children }) {
    const { map_id } = useParams();
    const [markers, setMarkers] = useState(null);

    useEffect(() => {
        if (!map_id) return;
        getMarkersByMapId(map_id).then((data) => {
            setMarkers(data);
        });
    }, [map_id]);

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
