import React, { useState } from "react";
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

export default function App() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);

  return (
    <>
      <header>
        <Navbar
          maxWidth="full"
          className="toggleIcon  border-b-4 border-neutral-800 h-32 bg-fixed bg-[#2c2c2c] bg-[size:10px_10px] bg-[image:radial-gradient(circle_at_center,_rgba(255,255,255,0.005)_0,_rgba(255,255,255,0.005)_1px,_transparent_1px),_linear-gradient(to_right,_rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.01)_1px,_transparent_1px)"
        >
          <img src="src/assets/icons/icon.svg" alt="logo" className="h-8 w-8" />
          <NavbarBrand className="justify=start">
            <Link
              href="#"
              className="font-bold text-inherit text-xl text-[#f6f2d8] hover:text-slate-400"
            >
              Home
            </Link>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex  gap-4 pe-20 " justify="end">
            <NavbarItem>
              <Link
                color="foreground"
                href={"#About"}
                className="font-bold text-xl  text-[#f6f2d8] hover:text-slate-400"
              >
                About
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                color="foreground"
                href={"#Projects"}
                className="font-bold text-xl  text-[#f6f2d8] hover:text-slate-400"
              >
                Projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href={"#Contact"}
                className="font-bold text-xl hover:text-slate-400 text-[#f6f2d8]"
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
          className="container grid grid-rows-5 grid-cols-4 items-center min-h-[115vh] min-w-full "
        >
          <div className="grid-cols-subgrid row-start-1 col-start-1 col-span-3 row-span-2 absolute  top-1/4 left-1/4">
            <Image
              width={300}
              height={300}
              radius={"full"}
              loading="lazy"
              src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            />
          </div>
          <p className=" font-bold text-5xl text-[#f6f2d8] grid grid-cols-subgrid row-start-1 col-start-2  col-span-1 row-span-1  absolute top-1/4 left-[60vw]">
            Hi!👋 My name is Donovan.
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
            <h1 className="font-bold text-5xl text-[#f6f2d8] align-text-top items-center">
              About Me
            </h1>
            <p className="text-amber-50/60">kasdkasjdkasdkasjdkasjdksaj</p>
            <div className="w-full  max-h-full block absolute radius"></div>
          </div>

          <div className=" grid grid-cols-subgrid row-start-2  row-span-3 col-start-3 justify-center">
            <div>
              <h1 className="font-bold text-5xl text-[#f6f2d8]  ">
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
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
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
          className=" grid grid-cols-3 grid-rows-3 min-h-screen min-w-full justify-items-center "
        >
          <div className="grid absolute grid-cols-subgrid col-start-2">
            <h1 className="flex flex-1 font-bold text-[#f6f2d8] leading-tight text-[10rem] mt-[-80px]">
              Recent Projects
            </h1>
          </div>
          {/* BANKIST */}

          <Card
            id="card1"
            isFooterBlurred
            className="w-[400px] h-[400px] bg-[#f3f3f3] shadow-2xl shadow-amber-50/30 grid-cols-subgrid row-start-2 col-start-1 col-span-1 row-span-1 transition ease-in duration-500 hover:scale-125 flex justify-center items-center"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-black/60 uppercase font-bold">
                Modern Banking Website
              </p>
              <h4 className="text-black/90 font-medium text-xl"></h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-contain"
              src="./src/assets/projects/bank.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-sm text-white/80">Languages:</p>
                  <p className="text-sm text-white/80">JS, HTML, CSS, mySQL</p>
                </div>
              </div>
              <Button onPress={() => setIsModal1Open(true)}>Read More</Button>
              <Modal
                backdrop="blur"
                size="5xl"
                radius={"lg"}
                shadow="sm"
                isOpen={isModal1Open}
                onOpenChange={setIsModal1Open}
                classNames={{
                  backdrop:
                    "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
              >
                <ModalContent>
                  {() => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Banking app
                      </ModalHeader>
                      <ModalBody>
                        <Image
                          width={500}
                          height={500}
                          src="./src/assets/projects/bank.png"
                          className="float-left"
                        />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Nullam pulvinar risus non
                          risus hendrerit venenatis. Pellentesque sit amet
                          hendrerit risus, sed porttitor quam. Magna
                          exercitation reprehenderit magna aute tempor cupidatat
                          consequat elit dolor adipisicing. Mollit dolor eiusmod
                          sunt ex incididunt cillum quis. Velit duis sit officia
                          eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
                          mollit incididunt nisi consectetur esse laborum
                          eiusmod pariatur proident Lorem eiusmod et. Culpa
                          deserunt nostrud ad veniam.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={() => setIsModal1Open(false)}
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
            className="w-[400px] bg-[linear-gradient(to_right_bottom,#fbdb89,#f48982)] h-[400px] shadow-2xl shadow-amber-50/30 grid-cols-subgrid row-start-2 col-start-2 col-span-1 row-span-1 transition ease-in duration-500 hover:scale-125 flex justify-center items-center"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-black/60 uppercase font-bold">
                Recipe Application
              </p>
            </CardHeader>
            <Image
              removeWrapper
              className="z-0 w-full h-[330px] object-scale-down"
              src="./src/assets/projects/food.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  className="rounded-full w-10 h-11 bg-black"
                  src="/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-sm text-white/80">Languages:</p>
                  <p className="text-sm text-white/80">JS, HTML, CSS, mySQL</p>
                </div>
              </div>
              <Button onPress={() => setIsModal2Open(true)}>Read More</Button>
              <Modal
                backdrop="blur"
                size="5xl"
                radius={"lg"}
                shadow="sm"
                isOpen={isModal2Open}
                onOpenChange={setIsModal2Open}
                classNames={{
                  backdrop:
                    "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
              >
                <ModalContent>
                  {() => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Food Recipe App
                      </ModalHeader>
                      <ModalBody>
                        <Image
                          width={500}
                          height={500}
                          src="./src/assets/projects/food.png"
                          className="float-left"
                        />
                        <p>
                          USES OPENSTREETMAP TO GET GEOLOCATION SAVES LOCALLY IN
                          CACHE
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={() => setIsModal2Open(false)}
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
            id="card3"
            isFooterBlurred
            className="w-[400px] bg-[#1f1f1f]/40 shadow-2xl shadow-amber-50/30 h-[400px] grid-cols-subgrid row-start-2 col-start-3 col-span-1 row-span-1 transition ease-in duration-500 hover:scale-125 flex justify-center items-center"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-black/60 uppercase font-bold">
                GPS fitness-tracking app
              </p>
            </CardHeader>
            <Image
              removeWrapper
              className="z-0 w-full h-full object-cover"
              src="./src/assets/projects/maps1.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  className="rounded-full w-10 h-11 bg-black"
                  src="/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-small text-white/90">Languages:</p>
                  <p className="text-small text-white/80">
                    JS, HTML, CSS, Python
                  </p>
                </div>
              </div>
              <Button onPress={() => setIsModal3Open(true)}>Read More</Button>
              <Modal
                backdrop="blur"
                size="5xl"
                radius={"lg"}
                shadow="sm"
                isOpen={isModal3Open}
                onOpenChange={setIsModal3Open}
                classNames={{
                  backdrop:
                    "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
              >
                <ModalContent>
                  {() => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Run and Cycling Tracker
                      </ModalHeader>
                      <ModalBody>
                        <Image
                          width={500}
                          height={500}
                          src="./src/assets/projects/maps.png"
                          className="float-left"
                        />
                        <p>
                          USES OPENSTREETMAP TO GET GEOLOCATION SAVES LOCALLY IN
                          CACHE
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={() => setIsModal3Open(false)}
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
        </section>

        {/* CONTACT SECTION */}

        <section
          id="Contact"
          className="min-h-[50vh] flex flex-col items-center justify-center"
        >
          {/* shadow-amber-50 */}
          <h1 className="text-center tracking-tight font-extrabold text-[10em] leading-10 text-[#f6f2d8] mb-40">
            Contact Me
          </h1>

          <div className="flex justify-center gap-10 mb-5">
            <a href="https://github.com/syevers" target="_blank">
              <Image
                width={80}
                fill="#f6f2d8"
                height={80}
                src="./src/assets/icons/github.svg"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/donovan-b-857742226/"
              target="_blank"
            >
              <Image
                width={90}
                height={90}
                src="./src/assets/icons/linkedin.svg"
              />
            </a>
            <Tooltip
              content="doncvan"
              showArrow={true}
              size="lg"
              color="foreground"
              className="text-xl"
              radius="full"
            >
              <Image
                width={100}
                height={110}
                src="./src/assets/icons/discord.svg"
              />
            </Tooltip>
          </div>

          <div
            id="contactForm"
            className="flex flex-col  items-center w-[80vw] justify-center gap-8 p-4  "
          >
            <div className="flex w-full  gap-4">
              <Textarea
                labelPlacement="outside"
                type="name"
                label="NAME"
                placeholder="e.g. Enter your name"
                maxRows="2"
                size="lg"
                radius="none"
                color="[#f6f2d8]"
                classNames={{
                  label: ["text-[#f6f2d8]", "text-xl"],
                  input: [
                    "bg-transparent",
                    "hover:bg-transparent",
                    "placeholder:text-[#bbb7a5]",
                  ],
                  innerWrapper: ["bg-transparent", "hover:bg-transparent"],
                  inputWrapper: [
                    "bg-transparent",
                    "outline-[#f6f2d8]",
                    "text-[#f6f2d8]",
                    "focus-within:!bg-transparent",
                    "group-data-[hover=true]:bg-transparent",
                  ],
                }}
                className="flex-1  font-light "
              />
              <Textarea
                labelPlacement="outside"
                type="email"
                label="EMAIL ADDRESS"
                placeholder="example@mail.com"
                maxRows="2"
                size="lg"
                radius="none"
                color="[#f6f2d8]"
                classNames={{
                  label: ["text-[#f6f2d8]", "text-xl"],
                  input: [
                    "bg-transparent",
                    "hover:bg-transparent",
                    "placeholder:text-[#bbb7a5]",
                  ],
                  innerWrapper: ["bg-transparent", "hover:bg-transparent"],
                  inputWrapper: [
                    "bg-transparent",
                    "outline-[#f6f2d8]",
                    "text-[#f6f2d8]",
                    "focus-within:!bg-transparent",
                    "group-data-[hover=true]:bg-transparent",
                  ],
                }}
                className="flex-1 font-light"
              />
            </div>
            <Textarea
              minRows={5}
              label="MESSAGE"
              type="message"
              size="lg"
              labelPlacement="outside"
              placeholder="Type your message here...."
              radius="none"
              color="[#f6f2d8]"
              classNames={{
                label: ["text-[#f6f2d8]", "text-xl"],
                input: [
                  "bg-transparent",
                  "hover:bg-transparent",
                  "placeholder:text-[#bbb7a5]",
                ],
                innerWrapper: ["bg-transparent", "hover:bg-transparent"],
                inputWrapper: [
                  "bg-transparent",
                  "outline-[#f6f2d8]",
                  "text-[#f6f2d8]",
                  "focus-within:!bg-transparent",
                  "group-data-[hover=true]:bg-transparent",
                ],
              }}
              className="text-2xl w-full font-light"
            />
            <Button className="w-1/6 h-[3em] font-medium leading-loose text-xl bg-[#f6f2d8] text-[#2148e6]">
              SEND
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
