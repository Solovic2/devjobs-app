import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="-mt-10 mx-8 md:mx-12 lg:mx-[10%]">{children}</main>
    </>
  );
};
export default Layout;
