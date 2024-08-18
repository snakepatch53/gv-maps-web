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
        cursor: "pointer",
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
        color: "black",
        cursor: "crosshair",
        weight: 5,
        type: typeTools.FIBER
    },
    MINI_ADSS: {
        name: "Mini ADSS",
        icon: faRoute,
        color: "orange",
        cursor: "crosshair",
        weight: 4,
        type: typeTools.FIBER
    },
    DROP: {
        name: "Drop",
        icon: faRoute,
        color: "blue",
        cursor: "crosshair",
        weight: 3,
        type: typeTools.FIBER
    },

};

