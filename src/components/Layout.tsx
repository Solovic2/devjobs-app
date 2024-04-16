import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="-mt-4 mx-6 md:mx-12 lg:mx-[19%]">{children}</div>;
};
export default Layout;
