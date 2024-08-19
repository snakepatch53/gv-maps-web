import { createContext, useEffect, useState } from "react";
import {
    newMarker,
    moveMarker as _moveMarker,
    destroyMarker,
    getMarkersByMapId,
    updateMarker,
} from "../services/markers";
import { useParams } from "react-router-dom";
import { showNotification } from "../components/Notification";

// 1. Crear el contexto
export const MarkersContext = createContext();

// 2. Crear el provider
export function MarkersProvider({ children }) {
    const { map_id } = useParams();
    const [markers, setMarkers] = useState(null);
    const [markerSelected, setMarkerSelected] = useState(null);

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

    const _updateMarker = (marker_id, data) => {
        // console.log(marker_id, data);
        return updateMarker(marker_id, data).then((res) => {
            if (!res.success)
                return showNotification({ title: "Error", message: res.message, type: "danger" });
            setMarkers(res.data);
            closeMarkerForm();
            showNotification({
                title: "Exito",
                message: "Marcador actualizado",
                type: "success",
                duration: 1000,
            });
        });
    };

    // opciones de formulario
    const openMarkerForm = (marker) => setMarkerSelected(marker);
    const closeMarkerForm = () => setMarkerSelected(null);

    return (
        <MarkersContext.Provider
            value={{
                markers,
                addMarker,
                moveMarker,
                removeMarker,
                // opciones de formulario
                isMarkerFormOpen: !!markerSelected,
                markerSelected,
                openMarkerForm,
                closeMarkerForm,
                updateMarker: _updateMarker,
            }}
        >
            {children}
        </MarkersContext.Provider>
    );
}
