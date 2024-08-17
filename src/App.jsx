import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { lazy, Suspense } from "react";
import Loading from "./views/Loading";
import RouterPanel from "./RouterPanel";
import { SidebarProvider } from "./contexts/sidebar";
import { HeaderProvider } from "./contexts/header";
import AuthGuard from "./guards/AuthGuard";
import { Notification } from "./components/Notification";
import SessionOutGuard from "./guards/SessionOutGuard";

const Login = lazy(() => import("./views/Login"));
// const RouterPanel = lazy(() => import("./RouterPanel"));
const NotFound = lazy(() => import("./views/NotFound"));
const PublicMap = lazy(() => import("./landing.views/PublicMap"));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Notification />
                <Routes>
                    <Route path="/public-map/:map_id" element={<PublicMap />} />
                    <Route element={<SessionOutGuard />}>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route element={<AuthGuard />}>
                        <Route
                            path="/panel/*"
                            element={
                                <SidebarProvider>
                                    <HeaderProvider>
                                        <RouterPanel />
                                    </HeaderProvider>
                                </SidebarProvider>
                            }
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
