import { createContext, useState } from "react";

// 1. Crear el contexto
export const HeaderContext = createContext();

// 2. Crear el provider
export function HeaderProvider({ children }) {
    const [isOpenHeaderOptions, setIsOpenHeaderOptions] = useState(false);

    const toggleHeaderOptions = () => {
        setIsOpenHeaderOptions(!isOpenHeaderOptions);
        localStorage.setItem("isOpenSidebar", !isOpenHeaderOptions);
    };

    return (
        <HeaderContext.Provider
            value={{
                isOpenHeaderOptions,
                toggleHeaderOptions,
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
}
