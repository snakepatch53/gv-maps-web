import { createContext, useEffect, useState } from "react";

import { destroyFiber, getFibersByMapId, newFiber, updateFiber } from "../services/fibers";
import { destroyFiberMarker, newFiberMarker, updateFiberMarker } from "../services/fiber_markers";
import { toolsMap } from "../lib/constants";
import { useParams } from "react-router-dom";
import { showNotification } from "../components/Notification";

// 1. Crear el contexto
export const FibersContext = createContext();

// 2. Crear el provider
export function FibersProvider({ children }) {
    const [fibers, setFibers] = useState(null);
    const [fiberSelected, setFiberSelected] = useState(null);
    const [isFiberFormOpen, setIsFiberFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { map_id } = useParams();

    useEffect(() => {
        if (!map_id) return;
        getFibersByMapId(map_id).then((res) => {
            setFibers(res.data);
        });
    }, [map_id]);

    const addFiber = (marker) => {
        newFiber(marker).then((res) => {
            setFiberSelected(res.fiber_created);
            setFibers(res.data);
        });
    };

    const onToolChange = () => {
        setFiberSelected(null);
    };

    const updateMarkerOfFiber = (markers, fiber_id) => {
        if (!markers || !fiber_id) return;

        setFibers((prevFibers) => {
            return prevFibers.map((fiber) => {
                if (fiber.id === fiber_id) {
                    return {
                        ...fiber,
                        fiber_markers: markers,
                    };
                }
                return fiber;
            });
        });
    };

    const addFiberMarker = (marker, fiber_id) => {
        newFiberMarker(marker).then((res) => {
            updateMarkerOfFiber(res.data, fiber_id);
        });
    };

    const removeFiberMarker = (marker) => {
        destroyFiberMarker(marker.id).then((res) => updateMarkerOfFiber(res.data, marker.fiber_id));
    };

    const handleClick = (event, map_id, tool) => {
        if (
            tool.name !== toolsMap.ADSS.name &&
            tool.name !== toolsMap.MINI_ADSS.name &&
            tool.name !== toolsMap.DROP.name
        )
            return;
        if (fiberSelected === null) {
            // add new fiber and first point
            addFiber({
                type: tool.name,
                map_id,
                fiber_markers: [
                    {
                        latitude: event.latlng.lat,
                        longitude: event.latlng.lng,
                    },
                ],
            });
            return;
        }

        // add new point to fiber
        addFiberMarker(
            {
                latitude: event.latlng.lat,
                longitude: event.latlng.lng,
                fiber_id: fiberSelected.id,
            },
            fiberSelected.id
        );
    };

    const handleDrag = (event, marker) => {
        updateFiberMarker(marker.id, {
            latitude: event.target.getLatLng().lat,
            longitude: event.target.getLatLng().lng,
        }).then((res) => updateMarkerOfFiber(res.data, marker.fiber_id));
    };

    const handleLineClick = (e, fiber_id) => {
        const clickedLatLng = e.latlng;

        // Encontrar el par de puntos más cercano
        let closestIndex = 0;
        let minDistance = Infinity;

        const fiber = fibers.find((fiber) => fiber.id === fiber_id);
        const fiberMarkers = fiber.fiber_markers;
        for (let i = 0; i < fiberMarkers?.length - 1; i++) {
            const fiberMarker = fiberMarkers[i];
            const fiberMarkerNext = fiberMarkers[i + 1];
            const middleLatLng = {
                lat: (parseFloat(fiberMarker.latitude) + parseFloat(fiberMarkerNext.latitude)) / 2,
                lng:
                    (parseFloat(fiberMarker.longitude) + parseFloat(fiberMarkerNext.longitude)) / 2,
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

        // const fiberMarkerBefore = fiber.fiber_markers[closestIndex];
        const fiberMarkerAfter = fiber.fiber_markers[closestIndex + 1];
        const order = fiberMarkerAfter.order;
        console.log(order);
        addFiberMarker(
            {
                latitude:
                    (parseFloat(fiberMarkers[closestIndex].latitude) +
                        parseFloat(fiberMarkerAfter.latitude)) /
                    2,
                longitude:
                    (parseFloat(fiberMarkers[closestIndex].longitude) +
                        parseFloat(fiberMarkerAfter.longitude)) /
                    2,
                order: order,
                fiber_id,
            },
            fiber_id
        );
    };

    const openFiberForm = (fiber) => {
        setFiberSelected(fiber);
        setIsFiberFormOpen(true);
    };

    const closeFiberForm = () => {
        setFiberSelected(null);
        setIsFiberFormOpen(false);
    };

    const _updateFiber = (fiber_id, data) => {
        return updateFiber(fiber_id, data).then((res) => {
            if (!res.success)
                return showNotification({ title: "Error", message: res.message, type: "danger" });
            setFibers(res.data);
            closeFiberForm();
            showNotification({
                title: "Exito",
                message: "Fibra actualizado",
                type: "success",
                duration: 1000,
            });
        });
    };

    const deleteFiber = (fiber_id) => {
        setIsLoading(true);
        destroyFiber(fiber_id).then((res) => {
            setIsLoading(false);
            if (!res.success)
                return showNotification({ title: "Error", message: res.message, type: "danger" });
            setFibers(res.data);
            closeFiberForm();
            showNotification({
                title: "Exito",
                message: "Fibra eliminada",
                type: "success",
                duration: 1000,
            });
        });
    };

    return (
        <FibersContext.Provider
            value={{
                fibers,
                handleClick,
                handleDrag,
                handleLineClick,
                onToolChange,
                removeFiberMarker,
                fiberSelected,
                isFiberFormOpen,
                openFiberForm,
                closeFiberForm,
                updateFiber: _updateFiber,
                deleteFiber,
                isLoading,
            }}
        >
            {children}
        </FibersContext.Provider>
    );
}
