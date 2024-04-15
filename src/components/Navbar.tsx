import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="bg-mobile-header md:bg-tablet-header lg:bg-desktop-header bg-no-repeat bg-top bg-cover pb-14 md:pb-[90px]">
      <nav className="px-8 md:px-12 lg:px-[10%] md:pt-12 h-[72px] flex justify-between items-center bg-transparent text-white">
        <h1 className="logo text-4xl font-bold">devjobs</h1>
        <div className="flex items-center gap-10">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
