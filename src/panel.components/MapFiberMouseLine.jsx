import { useContext, useEffect, useState } from "react";
import { Polyline, useMapEvents } from "react-leaflet";
import { FibersContext } from "../contexts/fibers";
import { typeTools } from "../lib/constants";
import { MapviewContext } from "../contexts/mapview";

export default function MapFiberMouseLine() {
    const { fibers, fiberSelected } = useContext(FibersContext);
    const { toolSelected } = useContext(MapviewContext);

    const [line, setLine] = useState(null);

    useEffect(() => {
        if (!fiberSelected) return setLine(null);
    }, [fiberSelected]);

    useMapEvents({
        mousemove: (e) => {
            if (toolSelected.type !== typeTools.FIBER || !fiberSelected) return setLine(null);
            const fiber = fibers.find((fiber) => fiber.id === fiberSelected.id);
            const fiberMarkers = fiber?.fiber_markers;
            if (!fiberMarkers) return setLine(null);
            if (fiberMarkers.length < 1) return setLine(null);
            const lastPoint = fiberMarkers[fiberMarkers.length - 1];
            const positions = [
                [lastPoint.latitude, lastPoint.longitude],
                [e.latlng.lat, e.latlng.lng],
            ];
            setLine(positions);
        },
    });

    if (!line) return null;

    return (
        <Polyline
            pathOptions={{ color: toolSelected.color, dashArray: "2 10", weight: 5 }}
            positions={line}
        />
    );
}
