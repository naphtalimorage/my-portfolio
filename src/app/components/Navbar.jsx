import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";


// nav list component
const navListItems = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function NavList() {
  const pathname = usePathname();

  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, href }, key) => {
        const isActive = pathname === href;

        return (
          <Typography
            key={label}
            as="a"
            href={href}
            variant="small"
            color="gray"
            className={`font-medium text-blue-gray-500 ${isActive ? "border-b-2 border-purple-600" : ""
              }`}
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </Typography>
        );
      })}
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          className="mr-4 ml-2  py-1.5 text-xl font-semibold text-gray-900"
        >
          Naphtali Morage
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <Link href="/contact">
          <Button className="bg-purple-600 rounded-full hover:bg-purple-400">
            Contact me
          </Button>
        </Link>

      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}