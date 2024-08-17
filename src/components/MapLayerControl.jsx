import { LayersControl, TileLayer } from "react-leaflet";

const { BaseLayer } = LayersControl;
export default function MapLayerControl() {
    return (
        <LayersControl position="topright">
            <BaseLayer checked name="Normal">
                <TileLayer
                    checked
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </BaseLayer>
            <BaseLayer name="Satélite">
                <TileLayer url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </BaseLayer>
            <BaseLayer name="Light">
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            </BaseLayer>
            <BaseLayer name="Dark">
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            </BaseLayer>
        </LayersControl>
    );
}
