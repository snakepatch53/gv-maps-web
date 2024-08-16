import "./Sidebar.css";

import {
    faBagShopping,
    faCartShopping,
    faHome,
    faLayerGroup,
    faStore,
    faUser,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SessionContext } from "../context/session";
import { AdminOptions } from "../guards/AdminGuard";
import { SellerOptions } from "../guards/SellerGuard";
import { cls } from "../utils/utils";

export default function Sidebar() {
    const { session } = useContext(SessionContext);
    return (
        <div className="relative z-10 panel-sidebar-component">
            <img
                src={session.photo_url}
                alt={"Foto del usuario " + session.name}
                className="user_img"
            />
            <span className="text-[var(--color4-txt)]">{session.name}</span>
            <span className="user_name">{session.role}</span>
            <Option name="Inicio" icon={faHome} to="./" />
            <Option name="Perfil" icon={faUser} to="./profile" />
            <Option name="Tienda" icon={faBagShopping} to="./shop" />
            <Option name="Pedidos" icon={faCartShopping} to="./orders" />
            <AdminOptions>
                <Option name="Usuarios" icon={faUsers} to="./users" />
                <Option name="Negocios" icon={faStore} to="./business" />
            </AdminOptions>
            <SellerOptions>
                <Option name="Categorias" icon={faLayerGroup} to="./categories" />
            </SellerOptions>
        </div>
    );
}

function Option({ name, icon, to }) {
    const { pathname } = useLocation();
    const pathnameWithoutPanel = pathname.replace("/panel", "");
    const isActive = pathnameWithoutPanel === to.replace(".", "");
    return (
        <Link
            className={cls("group option", {
                "bg-black/20": isActive,
            })}
            to={to}
        >
            <FontAwesomeIcon icon={icon} />
            <span>{name}</span>
        </Link>
    );
}
