import { useContext, useEffect } from "react";
import { LayerGroup, LayersControl, Marker, Polyline, Popup, useMapEvents } from "react-leaflet";
import { MapviewContext } from "../contexts/mapview";
import { toolsMap, typeTools } from "../lib/constants";
import { FibersContext } from "../contexts/fibers";
import { calculateTotalDistance, getIconMarker } from "../lib/utils";
import { useParams } from "react-router-dom";
const { Overlay } = LayersControl;

export default function MapFibers() {
    const { map_id } = useParams();
    const { fibers, handleClick, handleLineClick, onToolChange, openFiberForm } =
        useContext(FibersContext);
    const { toolSelected } = useContext(MapviewContext);

    useEffect(() => {
        onToolChange();
    }, [toolSelected]); // eslint-disable-line

    useMapEvents({
        click: (e) => handleClick(e, map_id, toolSelected),
        keydown: (e) => {
            const key = e?.originalEvent?.key;
            if (key === "Escape" || key === "Enter") {
                onToolChange();
            }
        },
    });

    if (!fibers || fibers === null) return;
    // organizar en grupos que correspondan a tipo de fibra
    const formatedFibers = fibers.reduce((acc, fiber) => {
        if (!acc[fiber.type]) acc[fiber.type] = [];
        acc[fiber.type].push(fiber);
        return acc;
    }, {});
    return Object.entries(formatedFibers).map(([type, fibers]) => {
        return (
            <Overlay key={type} name={type + "'s (" + fibers?.length + ")"} checked={true}>
                <LayerGroup>
                    {fibers.map((fiber) => {
                        const positions = fiber?.fiber_markers?.map((point) => [
                            point.latitude,
                            point.longitude,
                        ]);
                        const markTool = Object.values(toolsMap).find((tool) => tool.name === type);
                        return (
                            <div key={fiber.id}>
                                <Polyline
                                    pathOptions={{ color: markTool.color }}
                                    positions={positions}
                                    weight={markTool.weight}
                                    eventHandlers={{
                                        click: (e) => {
                                            if (toolSelected.name !== toolsMap.MOVE.name) return;
                                            handleLineClick(e, fiber.id);
                                        },
                                        dblclick: () => {
                                            if (toolSelected.name !== toolsMap.POINTER.name) return;
                                            openFiberForm(fiber);
                                        },
                                    }}
                                >
                                    {toolSelected.name === toolsMap.POINTER.name && (
                                        <Popup>{calculateTotalDistance(positions)}</Popup>
                                    )}
                                </Polyline>
                                <Markers fiber={fiber} positions={positions} />
                                <MarkersDrawer fiber={fiber} />
                            </div>
                        );
                    })}
                </LayerGroup>
            </Overlay>
        );
    });
}

function Markers({ fiber, positions }) {
    const { handleDrag, removeFiberMarker } = useContext(FibersContext);
    const { toolSelected } = useContext(MapviewContext);
    if (toolSelected.name !== toolsMap.MOVE.name && toolSelected.name !== toolsMap.TRASH.name)
        return null;
    return fiber.fiber_markers.map((marker, i) => (
        <Marker
            key={marker.id}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            icon={getIconMarker({ width: 20, height: 20, icon: "/point.png" })}
            draggable={toolSelected.name === toolsMap.MOVE.name}
            eventHandlers={{
                click: () => {
                    if (toolSelected.name === toolsMap.TRASH.name) removeFiberMarker(marker);
                },
                dragend: (e) => {
                    console.log("hola");
                    if (toolSelected.name === toolsMap.MOVE.name) handleDrag(e, marker);
                },
            }}
        >
            <Popup>{calculateTotalDistance(positions.slice(0, i + 1))}</Popup>
        </Marker>
    ));
}

function MarkersDrawer({ fiber }) {
    const { fiberSelected } = useContext(FibersContext);
    const { toolSelected } = useContext(MapviewContext);
    if (toolSelected.type !== typeTools.FIBER || fiberSelected?.id !== fiber.id) return null;
    return fiber.fiber_markers.map((marker) => (
        <Marker
            key={marker.id}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            icon={getIconMarker({ width: 30, height: 95, icon: "/marker.png" })}
        />
    ));
}
