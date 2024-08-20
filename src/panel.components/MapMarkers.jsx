import { useContext } from "react";
import { LayerGroup, LayersControl, Marker, Popup, useMapEvents } from "react-leaflet";
import { MapviewContext } from "../contexts/mapview";
import { toolsMap, typeTools } from "../lib/constants";
import { MarkersContext } from "../contexts/markers";
import { useParams } from "react-router-dom";
import { getIconMarker } from "../lib/utils";
const { Overlay } = LayersControl;

export default function MapMarkers() {
    const { map_id } = useParams();
    const { toolSelected } = useContext(MapviewContext);
    const { markers, addMarker, moveMarker, removeMarker, openMarkerForm } =
        useContext(MarkersContext);

    useMapEvents({
        click(e) {
            if (toolSelected.type !== typeTools.MARKER) return;

            addMarker({
                latitude: e.latlng.lat,
                longitude: e.latlng.lng,
                type: toolSelected.name,
                map_id,
            });
        },
    });

    if (!markers || markers === null) return;
    // organizar en grupos que correspondan a tipo de marcador
    const formatedMarkers = markers.reduce((acc, mark) => {
        if (!acc[mark.type]) acc[mark.type] = [];
        acc[mark.type].push(mark);
        return acc;
    }, {});

    return Object.entries(formatedMarkers).map(([type, marks]) => {
        const markTool = Object.values(toolsMap).find((tool) => tool.name === type);
        return (
            <Overlay key={type} name={type + "'s (" + marks?.length + ")"} checked={true}>
                <LayerGroup>
                    {marks.map((mark) => (
                        <Marker
                            key={mark.id}
                            position={{
                                lat: mark.latitude,
                                lng: mark.longitude,
                            }}
                            draggable={toolSelected.name === toolsMap.MOVE.name}
                            icon={getIconMarker({
                                width: 45,
                                height: 45,
                                icon: markTool.icon,
                            })}
                            eventHandlers={{
                                click: () => {
                                    if (toolSelected.name === toolsMap.TRASH.name) {
                                        removeMarker(mark.id);
                                    }
                                },
                                dblclick: () => {
                                    openMarkerForm(mark);
                                },
                                dragend: (e) => {
                                    if (toolSelected.name === toolsMap.MOVE.name) {
                                        moveMarker(e, mark.id);
                                    }
                                },
                            }}
                        >
                            <Popup>{mark.name_auto}</Popup>
                        </Marker>
                    ))}
                </LayerGroup>
            </Overlay>
        );
    });
}
