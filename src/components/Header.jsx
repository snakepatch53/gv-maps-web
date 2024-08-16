import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebar";
import { HeaderContext } from "../contexts/header";
import { SessionContext } from "../contexts/session";

export default function Header({ className }) {
    const { toggleSidebar } = useContext(SidebarContext);
    const { isOpenHeaderOptions, toggleHeaderOptions } = useContext(HeaderContext);
    const { logout, session } = useContext(SessionContext);

    return (
        <div className={cls("relative z-20 flex  bg-white ", className)}>
            <div className=" relative flex-1 flex justify-between items-center py-2 ">
                <button
                    onClick={toggleSidebar}
                    className=" w-10 aspect-square rounded-md p-2 transition hover:bg-black/10 "
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <button
                    onClick={toggleHeaderOptions}
                    className=" flex items-center gap-2 p-2 px-3 transition-all  hover:bg-black/10 rounded-full "
                >
                    <span className=" block text-ellipsis overflow-hidden text-nowrap ">
                        {session?.name}
                    </span>
                    <img
                        className=" w-10 aspect-square rounded-full "
                        src={"https://ui-avatars.com/api/?name=" + session?.name}
                    />
                </button>
                <div
                    className={cls(
                        " absolute z-[100000] top-[calc(100%+10px)] right-2 w-full max-w-60 max-h-80 flex flex-col gap-2 p-2 overflow-hidden rounded-lg opacity-100 bg-white shadow-md transition-all ",
                        {
                            " max-h-0 p-0 opacity-0 ": !isOpenHeaderOptions,
                        }
                    )}
                >
                    <button className=" p-2 opacity-60 font-bold transition hover:opacity-100 hover:bg-black/5 rounded ">
                        Perfil
                    </button>
                    <button
                        onClick={logout}
                        className=" p-2 opacity-60 font-bold transition hover:opacity-100 hover:bg-black/5 rounded "
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
}
