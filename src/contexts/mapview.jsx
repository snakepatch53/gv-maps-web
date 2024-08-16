import { createContext, useState } from "react";
import { toolsMap } from "../lib/constants";

// 1. Crear el contexto
export const MapviewContext = createContext();

// 2. Crear el provider
export function MapviewProvider({ children }) {
    const [toolSelected, setToolSelected] = useState(toolsMap.POINTER);

    const selectTool = (tool) => {
        setToolSelected(tool);
    };

    return (
        <MapviewContext.Provider
            value={{
                toolSelected,
                selectTool,
            }}
        >
            {children}
        </MapviewContext.Provider>
    );
}
