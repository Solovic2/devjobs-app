import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="-mt-10">{children}</main>;
};
export default Layout;
