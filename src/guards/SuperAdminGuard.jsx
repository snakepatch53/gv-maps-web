import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SessionContext } from "../contexts/session";
import Loading from "../views/Loading";

function isRole(role) {
    if (role == "SUPERADMIN") return true;
    return false;
}

export default function SuperAdminGuard() {
    const { session } = useContext(SessionContext);
    if (session == null) return <Loading />;
    if (isRole(session.role)) return <Outlet />;
    return <Navigate replace to="./" />;
}

export function SuperAdminOptions({ children }) {
    const { session } = useContext(SessionContext);
    if (isRole(session.role)) return children;
    return null;
}
