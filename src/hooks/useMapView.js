import { useContext, useEffect, useRef } from "react";
import { MapviewContext } from "../contexts/mapview";
import { MarkersContext } from "../contexts/markers";
import { FibersContext } from "../contexts/fibers";

export default function useMapView({ mapRef }) {
    const { toolSelected } = useContext(MapviewContext);
    const firstLoad = useRef(true);
    const { markers } = useContext(MarkersContext);
    const { fibers } = useContext(FibersContext);


    useEffect(() => {
        if (!mapRef.current) return;
        document.querySelector(".leaflet-container").style.cursor = toolSelected.cursor;
    }, [toolSelected]); // eslint-disable-line

    useEffect(() => {
        if (!mapRef.current) return;
        const map = mapRef.current;

        if (markers === null || fibers === null) return;
        if (!Array.isArray(markers) || !Array.isArray(fibers)) return;
        if (markers.length === 0 && fibers.length === 0) return;
        if (firstLoad.current === false) return;
        if (firstLoad.current === true) firstLoad.current = false;

        map.fitBounds(
            [...markers.map((marker) => [marker.latitude, marker.longitude]),
            ...fibers.map((fiber) => fiber.fiber_markers.map((fiber_marker) => [fiber_marker.latitude, fiber_marker.longitude]))
            ]
        );

    }, [markers, fibers]); // eslint-disable-line



    return { mapRef };
}