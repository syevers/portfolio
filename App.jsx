import React, {useEffect, useRef} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Image,
    Button,
} from "@nextui-org/react";
// noinspection ES6PreferShortImport
import {Logo} from "./Logo.jsx";

export default function App() {



  return (
      <>
        <header>
          <Navbar maxWidth="full"  className="toggleIcon" >

            <NavbarBrand className="justify=start">
              <Logo/>
              <Link href="#" className="font-bold text-inherit text-xl  hover:text-slate-400">Home</Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex  gap-4 pe-20 " justify="end">
              <NavbarItem >
                <Link color="foreground" href={"#About"}
                      className="font-bold text-xl  hover:text-slate-400">
                  About
                </Link>
              </NavbarItem>

              <NavbarItem>
                  {/* <Link color="foreground" href="#" aria-current="page"> */}
                <Link color="foreground" className="font-bold text-xl  hover:text-slate-400">
                  Projects
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href={"#Contact"}
                      className="font-bold text-xl hover:text-slate-400">
                  Contact
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </header>

        {/* container */}
        {/*   <main className=" mx-0 px-0 py-0 "> */}

        <main>
              <section id="About" className="grid grid-rows-4 grid-cols-4 items-center bg-white h-screen w-screen">
                  <div className="grid-cols-subgrid row-start-1 col-start-1 col-span-3 row-span-2 relative left-1/4">
                      <Image
                          width={500}
                          height={500}
                          radius= {"lg"}
                          loading="lazy"
                          alt="NextUI hero Image with delay"
                          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                      />
                  </div>
                  <p className="px-3 font-bold text-5xl text-black grid grid-cols-subgrid row-start-1 col-start-3 justify-items-center row-span-2  relative bottom-4 left-1/3">
                      Hi!👋<br />My name is Donovan.
                      <Button as={Link} href="https://www.google.com" target="_blank" radius="full" className="absolute top-3/4 my-12 ml-9 mr-unit-5xl  bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"> Download Resume </Button>
                  </p>

                 <div className="grid grid-cols-subgrid row-start-2 col-start-2 row-span-3 items-center">
                     <Image />
                     <h1 className="font-bold text-5xl text-black  items-center">About Me</h1>
                     <p>kasdkasjdkasdkasjdkasjdksaj</p>
                 </div>
                  <div className="grid grid-cols-subgrid row-start-2  row-span-3 col-start-3 justify-center">
                      <h1 className="font-bold text-5xl text-black  ">Skills</h1>
                  </div>

              </section>


              <section id="Projects" className=" bg-blue-400 h-screen w-screen flex-1 ">

              </section>
              <section id="Contact"
                       className=" bg-amber-400 h-screen w-screen flex-1 ">

              </section>

          </main>
          <div>


          </div>


      </>
  );
}
