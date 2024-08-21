import "leaflet/dist/leaflet.css";
import { LayerGroup, LayersControl, MapContainer, Marker, Polyline, Popup } from "react-leaflet";
import { calculateTotalDistance, cls, getIconMarker } from "../lib/utils";
import MapLayerControl from "../components/MapLayerControl";
import { useEffect, useState } from "react";
import { getPublicMap } from "../services/combos";
import { Link, useParams } from "react-router-dom";
import { toolsMap } from "../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { MapviewProvider } from "../contexts/mapview";
const { Overlay } = LayersControl;

export default function PublicMap() {
    // reload leafletmap when change toolSelected

    return (
        <div className={" relative flex flex-col gap-5 w-full h-screen p-7"}>
            <div className=" flex justify-center gap-2 w-full ">
                <div className=" flex justify-between items-center w-full max-w-[1400px] ">
                    <Link to="/login" className=" flex items-center w-full  ">
                        <img
                            className=" w-14 aspect-square "
                            src="/logo.png"
                            alt="Logo de GV-Maps"
                        />
                        <h1 className=" uppercase text-2xl  ">GV-Maps</h1>
                    </Link>
                    <div className=" flex items-center text-blue-800 ">
                        <span className=" text-center leading-4 ">Modo Vista</span>
                        <FontAwesomeIcon className=" text-xl " icon={faEye} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full h-full">
                <div className=" flex w-full max-w-[1400px] h-full rounded-2xl shadow-xl overflow-hidden bg-white ">
                    <MapviewProvider>
                        <LeafletMap />
                    </MapviewProvider>
                </div>
            </div>
        </div>
    );
}

function LeafletMap() {
    const { map_id } = useParams();
    const [markers, setMarkers] = useState(null);
    const [fibers, setFibers] = useState(null);
    useEffect(() => {
        getPublicMap(map_id).then((res) => {
            setMarkers(res?.data?.markers);
            setFibers(res?.data?.fibers);
        });
    }, [map_id]);
    return (
        <MapContainer
            className={cls(" flex w-full h-full cursor-pointer ")}
            center={{
                lat: -2.3093213892775175,
                lng: -78.12541130262117,
            }}
            zoom={16}
            style={{
                height: "100%",
                width: "100%",
            }}
        >
            <MapLayerControl>
                <Markers markers={markers} />
                <Fibers fibers={fibers} />
            </MapLayerControl>
        </MapContainer>
    );
}

function Markers({ markers }) {
    if (!markers || markers === null) return;
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
                            icon={getIconMarker({
                                width: 45,
                                height: 45,
                                icon: markTool.icon,
                            })}
                        >
                            <Popup>{mark.name_auto}</Popup>
                        </Marker>
                    ))}
                </LayerGroup>
            </Overlay>
        );
    });
}

function Fibers({ fibers }) {
    if (!fibers || fibers === null) return;
    const formatedFibers = fibers.reduce((acc, fiber) => {
        if (!acc[fiber.type]) acc[fiber.type] = [];
        acc[fiber.type].push(fiber);
        return acc;
    }, {});
    return Object.entries(formatedFibers).map(([type, fibers]) => {
        return (
            <Overlay key={type} name={type + "'s (" + fibers?.length + ")"} checked={true}>
                {fibers.map((fiber) => {
                    const positions = fiber?.fiber_markers?.map((point) => ({
                        lat: point.latitude,
                        lng: point.longitude,
                    }));

                    const markTool = Object.values(toolsMap).find((tool) => tool.name === type);
                    return (
                        <Polyline
                            key={fiber.id}
                            pathOptions={{ color: markTool.color }}
                            positions={positions}
                            weight={markTool.weight}
                        >
                            <Popup>{calculateTotalDistance(positions)}</Popup>
                        </Polyline>
                    );
                })}
            </Overlay>
        );
    });
}
