import { Flex } from "../../index";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <Flex width="100vw" height="100vh">
      <Sidebar />
      <Flex
        paddingLeft="50px"
        paddingRight="33px"
        paddingTop="30px"
        overflow="auto"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};
export default Layout;
