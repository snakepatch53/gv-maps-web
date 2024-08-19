import { useContext, useEffect } from "react";
import { Marker, Polyline, Popup, useMapEvents } from "react-leaflet";
import { MapviewContext } from "../contexts/mapview";
import { toolsMap } from "../lib/constants";
import { FibersContext } from "../contexts/fibers";
import { calculateTotalDistance, getIconMarker } from "../lib/utils";
import { useParams } from "react-router-dom";

export default function MapFibers() {
    const { map_id } = useParams();
    const { fibers, handleClick, handleLineClick, handleDrag, onToolChange, removeFiberMarker } =
        useContext(FibersContext);
    const { toolSelected } = useContext(MapviewContext);

    useEffect(() => {
        onToolChange();
    }, [toolSelected]); // eslint-disable-line

    useMapEvents({
        click: (e) => handleClick(e, map_id, toolSelected),
    });
    if (!fibers || fibers === null) return;
    return fibers?.map((fiber) => {
        const positions = fiber?.fiber_markers?.map((point) => ({
            lat: point.latitude,
            lng: point.longitude,
        }));

        const markTool = Object.values(toolsMap).find((tool) => tool.name === fiber.type);
        // if (positions.length < 2) return false;

        return (
            <div key={fiber.id}>
                <Polyline
                    pathOptions={{ color: markTool.color }}
                    positions={positions}
                    weight={markTool.weight}
                    eventHandlers={{
                        click: (e) => {
                            if (toolSelected.name === toolsMap.MOVE.name)
                                handleLineClick(e, fiber.id);
                        },
                    }}
                >
                    {toolSelected.name === toolsMap.POINTER.name && (
                        <Popup>{calculateTotalDistance(positions)}</Popup>
                    )}
                </Polyline>

                {(toolSelected.name === toolsMap.MOVE.name ||
                    toolSelected.name === toolsMap.TRASH.name) &&
                    fiber.fiber_markers.map((marker) => {
                        return (
                            <Marker
                                key={marker.id}
                                position={{ lat: marker.latitude, lng: marker.longitude }}
                                icon={getIconMarker({ width: 20, height: 20, icon: "/point.png" })}
                                draggable={toolSelected.name === toolsMap.MOVE.name}
                                eventHandlers={{
                                    click: () => {
                                        if (toolSelected.name === toolsMap.TRASH.name)
                                            removeFiberMarker(marker);
                                    },
                                    dragend: (e) => {
                                        if (toolSelected.name === toolsMap.MOVE.name)
                                            handleDrag(e, marker);
                                    },
                                }}
                            />
                        );
                    })}
            </div>
        );
    });
}
