import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function Nav2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "Sign in", "Sign up", "Profile", "Log Out"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="pt-4 mb-2 py-4 bg-sky-500">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            className="max-md:w-10 md:w-10 xl:w-16"
            src="/iconArg.png"
            alt="icon"
          />
          <p className=" drop-shadow font-bold md:text-xl xl:text-4xl animate-pulse text-gradient-argentina">
            Mytinerary
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Button as={Link} href="#" variant="flat">
            <Link color="foreground" href="/" className="hover:text-yellow-300 font-semibold">
              Home
            </Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" variant="flat">
            <Link
              href="/cities"
              aria-current="page"
              className="hover:text-yellow-300 font-semibold"
            >
              Cities
            </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Button
            as={Link}
            className="hover:text-yellow-300"
            href="#"
            variant="flat"
          >
            <Link href="/login" className="hover:text-yellow-300 font-semibold">
            Sign in
            </Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="hover:text-yellow-300 font-semibold"
            href="/register"
            variant="flat"
          >
            <UserIcon className="h-4 w-4 " /> Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
