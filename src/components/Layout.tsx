import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="-mt-10 mx-8 md:mx-12 lg:mx-[10%]">{children}</main>
  )
}
export default Layout
