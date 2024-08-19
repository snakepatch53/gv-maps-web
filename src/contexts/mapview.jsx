import { createContext, useEffect, useRef, useState } from "react";
import { layersMap, toolsMap } from "../lib/constants";
import L from "leaflet";

// 1. Crear el contexto
export const MapviewContext = createContext();

// 2. Crear el provider
export function MapviewProvider({ children }) {
    const mapRef = useRef(null);
    const [toolSelected, setToolSelected] = useState(toolsMap.POINTER);
    const [layerSelected, setLayerSelected] = useState(null);

    const [isSearching, setIsSearching] = useState(false);

    const selectTool = (tool) => setToolSelected(tool);

    const selectLayer = (layer) => {
        setLayerSelected(layer);
        window.localStorage.setItem("layerSelected", JSON.stringify(layer));
    };

    useEffect(() => {
        const layerStr = window.localStorage.getItem("layerSelected");
        if (layerStr) {
            const layer = JSON.parse(layerStr);
            return setLayerSelected(layer);
        }
        setLayerSelected(layersMap[0]);
    }, []);

    const searchLocation = async (query) => {
        if (!query) return;
        if (!mapRef.current) return;
        const map = mapRef.current;
        const results = await geocode(query);
        if (results.length > 0) {
            const { lat, lon } = results[0];
            const latlng = L.latLng(lat, lon);
            L.marker(latlng)
                .addTo(map)
                .bindPopup("Ubicación encontrada")
                .addEventListener("click", (e) => {
                    e.target.remove();
                })
                .setIcon(
                    L.icon({
                        iconUrl: "/marker.png",
                        iconSize: [30, 45],
                    })
                )
                .openPopup();
            map.setView(latlng, 13);
            return true;
        }
        return false;
    };

    const geocode = async (query) => {
        setIsSearching(true);
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
        );
        const data = await response.json();
        setIsSearching(false);
        return data;
    };

    return (
        <MapviewContext.Provider
            value={{
                toolSelected,
                selectTool,
                mapRef,
                isSearching,
                searchLocation,
                layerSelected,
                selectLayer,
            }}
        >
            {children}
        </MapviewContext.Provider>
    );
}
