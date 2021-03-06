import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import {
  Layout,
  Overview,
  Tickets,
  Ideas,
  Contacts,
  Agents,
  Articles,
  Settings,
  Subscription,
  LoginPage,
} from "../ui";
import { ROUTES } from "../utils";
import { useSelector } from "react-redux";
import { RootState } from "../store/applicationStore";

const RequireAuth = () => {
  const access = useSelector((state: RootState) => state.login.access);
  if (access) {
    return <Outlet />;
  }
  return <Navigate to={ROUTES.login} />;
};

export const AppRoutes = () => {
  const access = useSelector((state: RootState) => state.login.access);

  console.log(access);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path={ROUTES.overview} element={<Overview />} />
            <Route path={ROUTES.tickets} element={<Tickets />} />
            <Route path={ROUTES.ideas} element={<Ideas />} />
            <Route path={ROUTES.contacts} element={<Contacts />} />
            <Route path={ROUTES.agents} element={<Agents />} />
            <Route path={ROUTES.articles} element={<Articles />} />
            <Route path={ROUTES.settings} element={<Settings />} />
            <Route path={ROUTES.subscription} element={<Subscription />} />
          </Route>
        </Route>
        <Route path={ROUTES.login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
