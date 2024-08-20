import { useContext, useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet";
import { FibersContext } from "../contexts/fibers";
import { calculateTotalDistance } from "../lib/utils";
import { typeTools } from "../lib/constants";
import { MapviewContext } from "../contexts/mapview";

export default function MapFiberMouseTooltip() {
    const { fibers, fiberSelected } = useContext(FibersContext);
    const { toolSelected } = useContext(MapviewContext);

    const [message, setMessage] = useState(null);
    const [mousePosition, setMousePosition] = useState(null);

    useEffect(() => {
        if (!fiberSelected) return setMessage(null);
    }, [fiberSelected]);

    useMapEvents({
        mousemove: (e) => {
            setMousePosition(e);
            if (toolSelected.type !== typeTools.FIBER || !fiberSelected) return setMessage(null);
            const fiber = fibers.find((fiber) => fiber.id === fiberSelected.id);
            const fiberMarkers = fiber?.fiber_markers;
            if (!fiberMarkers) return setMessage(null);
            if (fiberMarkers.length < 1) return setMessage(null);
            const positions = fiberMarkers?.map((point) => [point.latitude, point.longitude]);
            positions.push([e.latlng.lat, e.latlng.lng]);
            const distance = calculateTotalDistance(positions);
            setMessage(
                <>
                    <p className=" text-red-200 ">{distance}</p>
                    <p className=" text-white ">Haga clic para continuar dibujando</p>
                </>
            );
        },
    });

    return (
        <div
            className=" absolute z-[400] bg-black/50 p-2 rounded-lg pointer-events-none -translate-y-1/2 whitespace-nowrap "
            style={{
                top: `${mousePosition?.containerPoint?.y}px`,
                left: `${mousePosition?.containerPoint?.x + 20}px`,
                display: message ? "block" : "none",
            }}
        >
            {message}
        </div>
    );
}
