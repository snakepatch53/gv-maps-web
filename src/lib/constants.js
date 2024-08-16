import { faArrowsUpDownLeftRight, faHand, faRoute, faTrash } from "@fortawesome/free-solid-svg-icons";

export const toolsMap = {
    POINTER: {
        name: "Drag",
        icon: faHand,
        color: "#e6b488",
        cursor: "grab"
    },
    MOVE: {
        name: "Mover",
        icon: faArrowsUpDownLeftRight,
        color: "#111111",
        cursor: "move"
    },
    DOMO: {
        name: "Domo",
        icon: "/domo.png",
        cursor: "url(/domo-cursor.png), auto"
    },
    MANGA: {
        name: "Manga",
        icon: "/manga.png",
        cursor: "url(/manga-cursor.png), auto"
    },
    RESERVA: {
        name: "Reserva",
        icon: "/reserva.png",
        cursor: "url(/reserva-cursor.png), auto"
    },
    NAP1: {
        name: "Nap 1",
        icon: "/nap1.png",
        cursor: "url(/nap1-cursor.png), auto"
    },
    NAP2: {
        name: "Nap 2",
        icon: "/nap2.png",
        cursor: "url(/nap2-cursor.png), auto"
    },
    ONT: {
        name: "ONT",
        icon: "/ont.png",
        cursor: "url(/ont-cursor.png), auto"
    },
    ADSS: {
        name: "ADSS",
        icon: faRoute,
        color: "red",
        cursor: "crosshair",
        weight: 5
    },
    MINI_ADSS: {
        name: "Mini ADSS",
        icon: faRoute,
        color: "blue",
        cursor: "crosshair",
        weight: 4
    },
    DROP: {
        name: "Drop",
        icon: faRoute,
        color: "green",
        cursor: "crosshair",
        weight: 3
    },
    TRASH: {
        name: "Eliminar",
        icon: faTrash,
        color: "red",
        cursor: "url(/cursor.png), auto"
    },
};
