import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
