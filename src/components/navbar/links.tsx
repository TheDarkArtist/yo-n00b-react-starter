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
    <ul className="flex font-medium text-cyan-600">
      {routes.map(({ name, path }) => (
        <li
          className="hover:bg-zinc-700 hover:text-cyan-500 py-1 px-2 rounded-md"
          key={name}
        >
          <a href={path}>{name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
