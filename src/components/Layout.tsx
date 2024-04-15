import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="-mt-4 mx-4 md:mx-12 xl:mx-[10%]">{children}</div>;
};
export default Layout;
