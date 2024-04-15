import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="xl:-mt-12 xl:px-[10%]">{children}</div>
  )
}
export default Layout