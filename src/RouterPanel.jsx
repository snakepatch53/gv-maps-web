import { lazy, Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./views/Loading";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { SidebarContext } from "./contexts/sidebar";
import { cls } from "./lib/utils";
import { MapviewProvider } from "./contexts/mapview";
import { MarkersProvider } from "./contexts/markers";
import { FibersProvider } from "./contexts/fibers";
import SuperAdminGuard from "./guards/SuperAdminGuard";

const Home = lazy(() => import("./views/Home"));
const Entities = lazy(() => import("./panel.views/Entities"));
const Maps = lazy(() => import("./panel.views/Maps"));
const MapView = lazy(() => import("./views/MapView"));

export default function RouterPanel() {
    const { isOpenSidebar } = useContext(SidebarContext);
    return (
        <Suspense fallback={<Loading />}>
            <div
                className={cls(
                    " grid grid-cols-[250px_1fr] grid-rows-[80px_1fr] w-full transition-all ",
                    {
                        " grid-cols-[80px_1fr] ": !isOpenSidebar,
                    }
                )}
            >
                <Sidebar className=" sticky top-0 row-span-2 max-w-72  w-full h-screen  " />

                <Header className=" sticky top-0 row-span-1 w-full  " />

                <div className=" flex flex-col min-h-full bg-black/5  ">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route element={<SuperAdminGuard />}>
                            <Route path="/entities" element={<Entities />} />
                        </Route>
                        <Route path="/maps" element={<Maps />} />
                        <Route
                            path="/map/:map_id"
                            element={
                                <MapviewProvider>
                                    <MarkersProvider>
                                        <FibersProvider>
                                            <MapView />
                                            {/* <Tests /> */}
                                        </FibersProvider>
                                    </MarkersProvider>
                                </MapviewProvider>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </Suspense>
    );
}
