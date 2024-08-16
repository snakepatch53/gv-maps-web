import { createContext, useEffect, useState } from "react";

// 1. Crear el contexto
export const SidebarContext = createContext();

// 2. Crear el provider
export function SidebarProvider({ children }) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(true);

    useEffect(() => {
        const isOpenStorage = localStorage.getItem("isOpenSidebar");
        if (isOpenStorage) {
            setIsOpenSidebar(JSON.parse(isOpenStorage));
        } else {
            localStorage.setItem("isOpenSidebar", isOpenSidebar);
        }
    }, []); // eslint-disable-line

    const toggleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
        localStorage.setItem("isOpenSidebar", !isOpenSidebar);
    };

    return (
        <SidebarContext.Provider
            value={{
                isOpenSidebar,
                toggleSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}
