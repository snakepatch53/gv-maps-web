import { LayersControl, TileLayer, useMapEvents } from "react-leaflet";
import { layersMap } from "../lib/constants";
import { useContext } from "react";
import { MapviewContext } from "../contexts/mapview";

const { BaseLayer } = LayersControl;
export default function MapLayerControl() {
    return (
        <LayersControl position="topleft">
            {layersMap.map((layer) => (
                <MyTileLayer key={layer.name} layer={layer} />
            ))}
        </LayersControl>
    );
}

function MyTileLayer({ layer }) {
    const { layerSelected, selectLayer } = useContext(MapviewContext);

    useMapEvents({
        baselayerchange: () => selectLayer(layer),
    });

    if (!layerSelected) return null;
    return (
        <BaseLayer name={layer.name} checked={layerSelected?.id === layer.id}>
            <TileLayer url={layer.url} />
        </BaseLayer>
    );
}
