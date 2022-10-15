import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";


const RouteWithSubRoutes = () => {
    const Element = (Component) => <Component />;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={Element(route.component)} />
                ))}
            </Routes>
        </Suspense >
    )
}

export default RouteWithSubRoutes;