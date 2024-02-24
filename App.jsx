import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  Button,
  CardFooter,
  Card,
  CardHeader,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Modal,
  Tooltip,
  Textarea,
} from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <header>
        <Navbar maxWidth="full" className="toggleIcon  border-b-2 h-32 ">
          <NavbarBrand className="justify=start">
            <Logo />
            <Link
              href="#"
              className="font-bold text-inherit text-xl  hover:text-slate-400"
            >
              Home
            </Link>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex  gap-4 pe-20 " justify="end">
            <NavbarItem>
              <Link
                color="foreground"
                href={"#About"}
                className="font-bold text-xl  hover:text-slate-400"
              >
                About
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                color="foreground"
                href={"#Projects"}
                className="font-bold text-xl  hover:text-slate-400"
              >
                Projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href={"#Contact"}
                className="font-bold text-xl hover:text-slate-400"
              >
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </header>

      {/* container */}
      {/*   <main className=" mx-0 px-0 py-0 "> */}

      <main>
        <section
          id="About"
          className="container grid grid-rows-5 grid-cols-4 items-center bg-white min-h-[115vh] min-w-full "
        >
          <div className="grid-cols-subgrid row-start-1 col-start-1 col-span-3 row-span-2 absolute  top-1/4 left-1/4">
            <Image
              width={500}
              height={500}
              radius={"full"}
              loading="lazy"
              alt="NextUI hero Image with delay"
              src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
          </div>
          <p className=" font-bold text-5xl text-black grid grid-cols-subgrid row-start-1 col-start-2  col-span-1 row-span-1  absolute top-1/4 left-[60vw]">
            Hi!👋
            <br />
            My name is Donovan.
            <Button
              as={Link}
              href="https://www.google.com"
              download="DonovanBosson-Resume.pdf"
              target="_blank"
              radius="full"
              className="absolute top-3/4 my-12 ml-9 mr-unit-5xl  bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Download Resume
            </Button>
          </p>

          <div className="grid grid-cols-subgrid row-start-2 col-start-2 row-span-3 items-center ">
            <h1 className="font-bold text-5xl text-black align-text-top items-center">
              About Me
            </h1>
            <p>kasdkasjdkasdkasjdkasjdksaj</p>
            <div className="w-full  max-h-full block absolute radius"></div>
          </div>

          <div className=" grid grid-cols-subgrid row-start-2  row-span-3 col-start-3 justify-center">
            <div>
              <h1 className="font-bold text-5xl text-black  ">
                Languages & Frameworks
              </h1>
              <p>kasdkasjdkasdkasjdkasjdksaj</p>
            </div>
            <div className="flex flex-1 ">
              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              />
              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              />

              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              />

              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              />
              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              />
            </div>
            <div className="flex">
              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              />
              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              />
              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              />
              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <Image
                width={50}
                height={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              />
            </div>
          </div>
        </section>

        <section
          id="Projects"
          className=" grid grid-cols-3 grid-rows-3 bg-blue-400 min-h-screen min-w-full justify-items-center "
        >
          <div className="grid absolute grid-cols-subgrid col-start-2">
            <h1 className="flex flex-1 font-bold text-9xl ">PROJECTS</h1>
          </div>
          <Card
            id="card1"
            isFooterBlurred
            className="w-[400px] h-[400px]  grid-cols-subgrid row-start-2 col-start-1 col-span-1 row-span-1 transition ease-in duration-500 hover:scale-125 flex justify-center items-center"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good night's sleep.
                  </p>
                </div>
              </div>
              <Button onPress={onOpen}>Read More</Button>
              <Modal
                backdrop="blur"
                size="5xl"
                radius={"lg"}
                shadow="sm"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                  backdrop:
                    "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Modal Title
                      </ModalHeader>
                      <ModalBody>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Magna exercitation reprehenderit magna aute tempor
                          cupidatat consequat elit dolor adipisicing. Mollit
                          dolor eiusmod sunt ex incididunt cillum quis. Velit
                          duis sit officia eiusmod Lorem aliqua enim laboris do
                          dolor eiusmod. Et mollit incididunt nisi consectetur
                          esse laborum eiusmod pariatur proident Lorem eiusmod
                          et. Culpa deserunt nostrud ad veniam.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardFooter>
          </Card>

          <Card
            id="card2"
            isFooterBlurred
            className="w-[400px] h-[400px] grid-cols-subgrid row-start-2 col-start-2 col-span-1 row-span-1 transition ease-in duration-500 hover:scale-125 flex justify-center items-center"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good night's sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card>

          <Card
            id="card3"
            isFooterBlurred
            className="w-[400px] h-[400px] grid-cols-subgrid row-start-2 col-start-3 col-span-1 row-span-1 transition ease-in duration-500 hover:scale-125 flex justify-center items-center"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good night's sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section
          id="Contact"
          className="bg-amber-400 min-h-[50vh] flex flex-col items-center justify-center"
        >
          <h2 className="text-center font-extrabold text-8xl mb-20">
            Contact Me
          </h2>

          <div className="flex justify-center gap-10 mb-20">
            <a href="https://github.com/syevers" target="_blank">
              <Image width={50} height={50} src="./src/assets/github.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/donovan-b-857742226/"
              target="_blank"
            >
              <Image width={50} height={50} src="./src/assets/linkedin.svg" />
            </a>
            <Tooltip
              content="doncvan"
              showArrow={true}
              size="md"
              color="foreground"
              className="text-xl"
            >
              <Image width={50} height={50} src="./src/assets/discord.svg" />
            </Tooltip>
          </div>

          <div
            id="contactForm"
            className="flex flex-col items-center w-full justify-center border-1 border-amber-900 bg-white gap-4 p-4 rounded-lg "
            // style={{ height: "50vh" }}
          >
            <div className="flex w-full  gap-4">
              <Textarea
                type="name"
                label="Name"
                maxRows="1"
                size="lg"
                radius="mg"
                color="default"
                className="flex-1"
              />
              <Textarea
                isClearable
                id="emailForm"
                type="email"
                label="Email"
                maxRows="1"
                size="lg"
                radius="mg"
                color="default"
                className="flex-1"
              />
            </div>
            <Textarea
              minRows={5}
              label="Message"
              size="lg"
              className="text-2xl w-full "
            />
            <Button className="w-full bg-black text-white">Send</Button>
          </div>
        </section>
      </main>
    </>
  );
}
