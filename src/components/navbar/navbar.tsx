import Branding from "./branding";
import Links from "./links";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="sticky top-0 px-4 h-14 bg-zinc-800 text-zinc-300">
      <div className="flex justify-between items-center h-full max-w-screen-2xl w-full mx-auto">
        <Logo />
        <Branding />
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
