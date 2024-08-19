import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { HeaderContext } from "../contexts/header";
import { cls } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toolsMap } from "../lib/constants";
import { MapviewContext } from "../contexts/mapview";
import MapLayerControl from "../components/MapLayerControl";
import MapMarkers from "../panel.components/MapMarkers";
import MapFibers from "../panel.components/MapFibers";
import MapMarkerForm from "../panel.components/MapMarkerForm";
import { MarkersContext } from "../contexts/markers";
import MapFiberForm from "../panel.components/MapFiberForm";
import { FibersContext } from "../contexts/fibers";
import useMapView from "../hooks/useMapView";

export default function MapView() {
    const { isSearching, searchLocation } = useContext(MapviewContext);
    const { isOpenHeaderOptions } = useContext(HeaderContext);
    const { isMarkerFormOpen } = useContext(MarkersContext);
    const { isFiberFormOpen } = useContext(FibersContext);

    // reload leafletmap when change toolSelected

    return (
        <div className=" relative flex w-full h-full ">
            <MapMarkerForm />
            <MapFiberForm />
            <div
                className={cls(" relative flex w-full h-full p-7", {
                    " -z-10 ": isOpenHeaderOptions || isMarkerFormOpen || isFiberFormOpen,
                })}
            >
                <div className=" flex flex-col w-full h-full rounded-2xl shadow-xl overflow-hidden bg-white ">
                    <div className=" flex items-center py-1 px-4 ">
                        {Object.values(toolsMap).map((tool) => (
                            <Option key={tool.name} tool={tool} />
                        ))}
                        <div
                            className={cls(
                                " flex items-center border w-full max-w-96 py-2 px-2 ml-auto rounded ",
                                {
                                    " bg-black/5 ": isSearching,
                                    " bg-white ": !isSearching,
                                }
                            )}
                        >
                            <input
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        if (searchLocation(e.target.value)) e.target.value = "";
                                    }
                                }}
                                className={" w-full "}
                                type="text"
                                placeholder="Buscar lugar"
                                disabled={isSearching}
                            />
                            {isSearching && <FontAwesomeIcon icon={faSpinner} spin />}
                            {!isSearching && <FontAwesomeIcon icon={faSearch} />}
                        </div>
                    </div>

                    <LeafletMap />
                </div>
            </div>
        </div>
    );
}

const LeafletMap = () => {
    const { mapRef } = useContext(MapviewContext);
    useMapView({
        mapRef,
    });

    return (
        <MapContainer
            ref={mapRef}
            className={cls(" flex w-full h-full cursor-pointer ")}
            center={[-2.3093213892775175, -78.12541130262117]}
            zoom={3}
        >
            <MapLayerControl />
            <MapMarkers />
            <MapFibers />
        </MapContainer>
    );
};

function Option({ tool }) {
    const { toolSelected, selectTool } = useContext(MapviewContext);
    const isActive = toolSelected.name === tool.name;
    const isPointerImg = typeof tool.icon === "string";
    return (
        <button
            onClick={() => selectTool(tool)}
            className={cls(
                " flex flex-col justify-between items-center py-1 px-3 h-full rounded transition-all hover:bg-black/5 hover:scale-110 ",
                {
                    " opacity-80  ": !isActive,
                    " bg-black/5 hover:scale-100 ": isActive,
                }
            )}
            style={{ color: tool.color }}
        >
            {isPointerImg ? (
                <img
                    className=" h-full max-h-6 aspect-square object-contain"
                    src={tool.icon}
                    alt={tool.name}
                />
            ) : (
                <FontAwesomeIcon className="text-lg" icon={tool.icon} />
            )}
            <p className=" text-black text-[10.5px] ">{tool.name}</p>
        </button>
    );
}
