import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const Links = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <ul className="flex gap-1 font-medium text-cyan-600">
      {routes.map(({ name, path }) => (
        <li key={name}>
          <NavLink
            className={({ isActive }) =>
              cn(
                isActive ? "bg-zinc-700 text-cyan-500" : "",
                "hover:bg-zinc-700 hover:text-cyan-500 py-1 px-2 rounded-md"
              )
            }
            to={path}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Links;
