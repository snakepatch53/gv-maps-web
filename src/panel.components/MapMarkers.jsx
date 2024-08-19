import { useContext } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { MapviewContext } from "../contexts/mapview";
import { toolsMap, typeTools } from "../lib/constants";
import { MarkersContext } from "../contexts/markers";
import { useParams } from "react-router-dom";
import { getIconMarker } from "../lib/utils";

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
    return markers.map((mark) => {
        const markTool = Object.values(toolsMap).find((tool) => tool.name === mark.type);
        return (
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
        );
    });
}

// function LocationMarker() {
//     const [position, setPosition] = useState(null);
//     const map = useMapEvents({
//         click() {
//             map.locate();
//         },
//         locationfound(e) {
//             setPosition(e.latlng);
//             map.flyTo(e.latlng, 15);
//         },
//     });

//     return position === null ? null : (
//         <Marker position={position}>
//             <Popup>You are here</Popup>
//         </Marker>
//     );
// }