import { faArrowsUpDownLeftRight, faHand, faRoute, faTrash } from "@fortawesome/free-solid-svg-icons";


export const typeTools = {
    MARKER: "marker",
    FIBER: "fiber",
    ACTION: "action"
};

export const toolsMap = {
    POINTER: {
        name: "Drag",
        icon: faHand,
        color: "#e6b488",
        cursor: "grab",
        type: typeTools.ACTION
    },
    MOVE: {
        name: "Mover",
        icon: faArrowsUpDownLeftRight,
        color: "#111111",
        cursor: "move",
        type: typeTools.ACTION
    },
    TRASH: {
        name: "Eliminar",
        icon: faTrash,
        color: "red",
        cursor: "pointer",
        type: typeTools.ACTION
    },
    DOMO: {
        name: "Domo",
        icon: "/domo.png",
        cursor: "url(/domo-cursor.png), auto",
        type: typeTools.MARKER
    },
    MANGA: {
        name: "Manga",
        icon: "/manga.png",
        cursor: "url(/manga-cursor.png), auto",
        type: typeTools.MARKER
    },
    RESERVA: {
        name: "Reserva",
        icon: "/reserva.png",
        cursor: "url(/reserva-cursor.png), auto",
        type: typeTools.MARKER
    },
    NODO: {
        name: "Nodo",
        icon: "/nodo.png",
        cursor: "url(/nodo-cursor.png), auto",
        type: typeTools.MARKER
    },
    NAP1: {
        name: "Nap 1",
        icon: "/nap1.png",
        cursor: "url(/nap1-cursor.png), auto",
        type: typeTools.MARKER
    },
    NAP2: {
        name: "Nap 2",
        icon: "/nap2.png",
        cursor: "url(/nap2-cursor.png), auto",
        type: typeTools.MARKER
    },
    ONT: {
        name: "ONT",
        icon: "/ont.png",
        cursor: "url(/ont-cursor.png), auto",
        type: typeTools.MARKER
    },
    ADSS: {
        name: "ADSS",
        icon: faRoute,
        color: "#191919",
        cursor: "crosshair",
        weight: 5,
        type: typeTools.FIBER
    },
    MINI_ADSS: {
        name: "Mini ADSS",
        icon: faRoute,
        color: "#eeb612",
        cursor: "crosshair",
        weight: 4,
        type: typeTools.FIBER
    },
    DROP: {
        name: "Drop",
        icon: faRoute,
        color: "#276ccf",
        cursor: "crosshair",
        weight: 3,
        type: typeTools.FIBER
    },

};


export const fiberColors = {
    1: "#87cefa",
    2: "#ffa500",
    3: "#228b22",
    4: "#8b4513",
    5: "#7f7f7f",
    6: "#cccccc",
    7: "#ff0000",
    8: "black",
    9: "#ffff00",
    10: "#4b0082",
    11: "#ffc0cb",
    12: "#00ffff"
};


export const layersMap = [
    {
        id: 1,
        name: "Open Street Map",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
    {
        id: 2,
        name: "Google Satélite Hybrid",
        url: "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
        attribution: "© Google Maps",
    },
    {
        id: 3,
        name: "Argis Satélite",
        url: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution: "© Esri",
    },
    {
        id: 4,
        name: "Clean Carto Map",
        url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        attribution: "© carto",
    },
    {
        id: 5,
        name: "Dark Carto Map",
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        attribution: "© carto",
    },
]