import { Link, useLocation } from "react-router-dom";
import { cls } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBusinessTime,
    faHome,
    faMap,
    faMoon,
    faSun,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebar";
import { SessionContext } from "../contexts/session";

export default function Sidebar({ className = "" }) {
    const { isOpenSidebar } = useContext(SidebarContext);
    const { entity } = useContext(SessionContext);

    return (
        <div className={cls(" flex flex-col gap-2 p-4 ", className)}>
            <div
                className={cls(" flex justify-center items-center w-full gap-2 ", {
                    " gap-0 ": !isOpenSidebar,
                })}
            >
                <img
                    src={entity?.logo_url}
                    alt={"Logo de " + entity?.name}
                    className=" max-w-12 w-full aspect-square "
                />
                <h1
                    className={cls(
                        " font-bold text-2xl overflow-hidden text-ellipsis text-nowrap transition-all ",
                        {
                            " w-0 ": !isOpenSidebar,
                        }
                    )}
                >
                    {entity?.name}
                </h1>
            </div>
            <br />
            <Option title="Inicio" icon={faHome} to="./home" />
            <Option title="Empresas" icon={faBusinessTime} to="./entities" />
            <Option title="Mapas" icon={faMap} to="./maps" />
            <Option title="Usuarios" icon={faUsers} to="./users" />

            <div
                className={cls(
                    " relative flex h-12 w-full mt-auto gap-2 bg-black/10 p-2 rounded-full ",
                    {
                        " aspect-square ": !isOpenSidebar,
                    }
                )}
            >
                <OptionTheme text="Light" icon={faSun} />
                <OptionTheme text="Dark" icon={faMoon} isActive />
            </div>
        </div>
    );
}

function OptionTheme({ isActive = false, text, icon }) {
    const { isOpenSidebar } = useContext(SidebarContext);
    return (
        <button
            className={cls(
                " flex-1 flex justify-center items-center h-full p-2 gap-1 rounded-full transition hover:bg-white/50 ",
                {
                    " bg-white hover:bg-white ": isActive,
                    " absolute inset-0 left-0 p-0 gap-0 bg-transparent ": !isOpenSidebar,
                    " opacity-0 ": !isActive && !isOpenSidebar,
                }
            )}
        >
            <FontAwesomeIcon
                className={cls(" opacity-60 transition hover:opacity-100 ", {
                    "opacity-100": isActive,
                })}
                icon={icon}
            />
            <span
                className={cls(" opacity-60 overflow-hidden transition hover:opacity-100 ", {
                    "opacity-100": isActive,
                    " w-0 ": !isOpenSidebar,
                })}
            >
                {text}
            </span>
        </button>
    );
}

function Option({ title, icon, to }) {
    const { isOpenSidebar } = useContext(SidebarContext);
    const { pathname } = useLocation();
    const pathnameWithoutPanel = pathname.replace("/panel", "");
    const isActive = pathnameWithoutPanel === to.replace(".", "");
    return (
        <Link
            to={to}
            className={cls(
                " flex items-center gap-2 p-3 h-12 opacity-70 rounded-lg transition-all hover:bg-black/10 ",
                {
                    " bg-black/15 opacity-100 ": isActive,
                    " aspect-square justify-center gap-0 ": !isOpenSidebar,
                }
            )}
        >
            <FontAwesomeIcon icon={icon} />
            <p
                className={cls(" font-medium overflow-hidden transition-all ", {
                    " w-0 ": !isOpenSidebar,
                })}
            >
                {title}
            </p>
        </Link>
    );
}
