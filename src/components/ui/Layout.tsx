import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="-mt-10">{children}</main>;
};
export default Layout;
