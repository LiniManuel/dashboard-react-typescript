import { Flex } from "../../index";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <Flex width="100vw" height="100vh">
      <Sidebar />
      <Outlet />
    </Flex>
  );
};
export default Layout;
