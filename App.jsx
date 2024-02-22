import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// noinspection ES6PreferShortImport
import {Logo} from "./Logo.jsx";

export default function App() {
  return (
      <>
        <header  className="flex-1 flex-row flex-nowrap mx-auto">
          <Navbar maxWidth="full" shouldHideOnScroll className="flex border-b-1 ">
            <NavbarBrand className="justify=start">
              <Logo/>
              <p className="font-bold text-inherit text-xl  hover:text-slate-400">Home</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex  gap-4 pe-20 "
                           justify="center">
              <NavbarItem>
                <Link color="foreground" href="#"
                      className="font-bold text-xl  hover:text-slate-400">
                  About
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#"
                      className="font-bold text-xl  hover:text-slate-400">
                  {/* <Link color="foreground" href="#" aria-current="page"> */}
                  Projects
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#"
                      className="font-bold text-xl hover:text-slate-400">
                  Contact
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </header>

        {/* container */}
        <main className="flex-1 ">
        <div className=" bg-neutral-800">
          <h2 className="text-white"> TEST </h2>
        </div>
        <section id="section-2"></section>

        </main>
        <div>


        </div>


      </>
  );
}
