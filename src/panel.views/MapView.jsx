import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect, useRef } from "react";
import { HeaderContext } from "../contexts/header";
import { cls } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { toolsMap } from "../lib/constants";
import { MapviewContext } from "../contexts/mapview";
import L from "leaflet";
import MapLayerControl from "../components/MapLayerControl";
import MapMarkers from "../panel.components/MapMarkers";
import MapFibers from "../panel.components/MapFibers";
import MapMarkerForm from "../panel.components/MapMarkerForm";
import { MarkersContext } from "../contexts/markers";

export default function MapView() {
    const { isOpenHeaderOptions } = useContext(HeaderContext);
    const { isMarkerFormOpen } = useContext(MarkersContext);

    // reload leafletmap when change toolSelected

    return (
        <div className=" relative flex w-full h-full ">
            <MapMarkerForm />
            <div
                className={cls(" relative flex w-full h-full p-7", {
                    " -z-10 ": isOpenHeaderOptions || isMarkerFormOpen,
                })}
            >
                <div className=" flex flex-col w-full h-full rounded-2xl shadow-xl overflow-hidden bg-white ">
                    <div className=" flex items-center py-1 px-4 ">
                        {Object.values(toolsMap).map((tool) => (
                            <Option key={tool.name} tool={tool} />
                        ))}
                        <div className=" flex items-center border w-full max-w-96 py-2 px-2 ml-auto rounded ">
                            <input className=" w-full " type="text" placeholder="Buscar lugar" />
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>

                    <LeafletMap />
                </div>
            </div>
        </div>
    );
}

const geocode = async (query) => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
    );
    const data = await response.json();
    return data;
};

const LeafletMap = () => {
    const { toolSelected } = useContext(MapviewContext);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current;

            const handleSearch = async (query) => {
                const results = await geocode(query);
                if (results.length > 0) {
                    const { lat, lon } = results[0];
                    const latlng = L.latLng(lat, lon);
                    L.marker(latlng).addTo(map).bindPopup("Ubicación encontrada").openPopup();
                    map.setView(latlng, 13);
                }
            };

            // Ejemplo de búsqueda
            handleSearch("New York");
        }
    }, []);

    useEffect(() => {
        if (!mapRef.current) return;
        document.querySelector(".leaflet-container").style.cursor = toolSelected.cursor;
    }, [toolSelected]);
    return (
        <MapContainer
            ref={mapRef}
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
