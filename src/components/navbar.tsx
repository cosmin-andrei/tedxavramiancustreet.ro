import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {HeartIcon} from "@heroicons/react/20/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
      <li>
        <Typography
            as="a"
            href={href || "#"}
            target={href ? "_blank" : "_self"}
            variant="paragraph"
            className="flex items-center gap-2 font-medium rounded-lg px-2 py-1 transition-all duration-300 hover:border hover:border-gray-300"
        >
          {children}
        </Typography>
      </li>
  );
}

const NAV_MENU = [
  // {
  //   name: "Speakeri",
  //   icon: UserCircleIcon,
  //   href: "../app/speakeri.tsx",
  // },
  {
    name: "Corporate",
    icon: BuildingOfficeIcon,
    href: "../app/corporate.tsx",
  },
  {
    name: "Merch",
    icon: ShoppingBagIcon,
    href: "../app/merch.tsx",
  },
  {
    name: "Parteneri",
    icon: HeartIcon,
    href: "#parteneri",
  },
  {
    name: "Despre noi",
    icon: RectangleStackIcon,
    href: "../app/despre.tsx",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <MTNavbar
          shadow={false}
          fullWidth
          blurred={false}
          color={isScrolling ? "white" : "transparent"}
          className={`fixed top-0 z-50 border-0 transition-all duration-300 ${
              isScrolling ? "shadow-lg" : ""
          }`}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <img
                src={isScrolling ? "/logos/logo-black.png" : "/logos/logo-white.png"}
                alt="Logo"
                className="h-10 transition-all duration-300"
            />
          </a>
          {/* Menu Items */}
          <ul
              className={`ml-10 hidden items-center gap-6 lg:flex ${
                  isScrolling ? "text-gray-900" : "text-white"
              }`}
          >
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="../app/participa.tsx" target="_blank">
              <Button
                  color="red"
                  className="rounded-lg transition-colors duration-300 hover:bg-darkred"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
              >
                Participă acum
              </Button>
            </a>
          </div>


          {/* Mobile Menu Icon */}
          <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
          >
            {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>


        {/* Mobile Menu */}
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a href="../app/participa.tsx" target="_blank">
                <Button
                    color="red"
                    className="rounded-lg transition-colors duration-300 hover:bg-darkred"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                >
                  Participă acum
                </Button>
              </a>
            </div>
          </div>
        </Collapse>
      </MTNavbar>
  );
}

export default Navbar;
