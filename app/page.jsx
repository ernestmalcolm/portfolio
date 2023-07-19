import Link from "next/link";
import Image from "next/image";

import ContactForm from "../components/contactForm";

import MyPhoto from "../public/images/myPhoto.png";
import otherPhoto from "../public/images/round.jpg";

import NextLogo from "../public/images/next-logo.svg";
import TailwindLogo from "../public/images/tailwind-logo.svg";
import HtmlLogo from "../public/images/html5-logo.svg";
import CssLogo from "../public/images/css-logo.svg";
import FigmaLogo from "../public/images/figma-logo.svg";
import JsLogo from "../public/images/js-logo.svg";
import ReactLogo from "../public/images/react-logo.svg";
import SassLogo from "../public/images/sass-logo.svg";

export default function Page() {
  return (
    <div>
      {/* Landing Page Hero section */}

      <div className="flex flex-row justify-between px-40 bg-lgray h-4/5">
        <div className="text-2xl text-blue w-3/5 pl-8 ">
          <h1 className="py-4 text-4xl font-bold leading-normal">
            Hello <br /> <spam className="text-red">I'm Ernest</spam>
          </h1>
          <p className="leading-loose text-3xl">
            I'm a passionate Software Engineer dedicated to crafting innovative
            solutions and building seamless user experiences
          </p>
          <button className="bg-blue rounded-lg text-lgray py-3 px-6 mt-5 hover:bg-red">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
        <div className="flex flex-col w-2/5 justify-around py-6 text-blue mr-4">
          <Image src={MyPhoto} alt="My Photo" height={700} width={700} />
        </div>
      </div>

      {/* About Me section */}

      <div id="about" className="text-lgray bg-blue w-full">
        <h1 className="py-4 text-5xl flex justify-center pt-10">About Me</h1>
        <hr className="text-red w-1/5 h-2 mx-auto my-1 bg-red rounded" />
        <div className="flex flex-row justify-center gap-12 pt-6">
          <Image
            src={otherPhoto}
            alt="My Photo"
            height={400}
            width={200}
            className="rounded-2xl w-1/4 z-10 h-1/2"
          />
          <div className="w-1/2 z-20 pt-6 ">
            <p className="leading-loose font-normal text-2xl text-justify">
              I am a passionate software developer from Dar-es-Salaam, Tanzania,
              with two years of experience. I love problem-solving and strive to
              create impactful applications that align with the latest industry
              trends. My goal is to deliver exceptional solutions that leave a
              lasting mark on the digital landscape.
            </p>
          </div>
          <h1 className="absolute text-9xl text-lgray font-semibold z-0 opacity-20 left-96">
            ABOUT ME
          </h1>
        </div>
      </div>

      {/* Skills section */}

      <div id="skills" className="text-3xl text-lgray bg-blue w-full py-8">
        <h1 className="py-4 text-5xl flex justify-center pt-10">Skills</h1>
        <hr className="text-red w-1/5 h-2 mx-auto my-1 bg-red rounded" />
        <div className="flex flex-row justify-center gap-12 pt-6">
          <div className="w-1/2 z-20 grid grid-cols-4 gap-8 py-8">
            <Link href="#">
              <Image
                src={HtmlLogo}
                width={85}
                height={85}
                alt="NextLogo"
                className="m-1"
              />
            </Link>
            <Link href="#">
              <Image
                src={CssLogo}
                width={85}
                height={85}
                alt="NextLogo"
                className=""
              />
            </Link>
            <Link href="#">
              <Image
                src={SassLogo}
                width={85}
                height={85}
                alt="NextLogo"
                className=""
              />
            </Link>
            <Link href="#">
              <Image
                src={TailwindLogo}
                width={85}
                height={85}
                alt="NextLogo"
                className=""
              />
            </Link>
            <Link href="#">
              <Image
                src={JsLogo}
                width={85}
                height={85}
                alt="NextLogo"
                className=""
              />
            </Link>
            <Link href="#">
              <Image
                src={ReactLogo}
                width={85}
                height={85}
                alt="NextLogo"
                className=""
              />
            </Link>
            <Link href="#">
              <Image
                src={NextLogo}
                width={85}
                height={85}
                alt="NextLogo"
                className=""
              />
            </Link>
            <Link href="#">
              <Image
                src={FigmaLogo}
                width={85}
                height={85}
                alt="NextLogo"
                className=""
              />
            </Link>
          </div>
          <h1 className="absolute text-9xl font-semibold z-0 opacity-20">
            SKILLS
          </h1>
        </div>
      </div>

      {/* Contact Me section */}

      <div id="contact" className="text-xl text-lgray bg-blue w-full pb-24">
        <h1 className="py-4 text-5xl flex justify-center pt-4">Contact Me</h1>
        <h1 className="absolute text-9xl text-lgray font-semibold z-0 pt-6 opacity-20 left-72">
          CONTACT ME
        </h1>
        <hr className="text-red w-1/5 h-2 mx-auto my-1 bg-red rounded" />
        <p className="leading-loose font-normal text-2xl flex justify-center py-2">
          Reach out to me anytime and I will respond ASAP
        </p>
        <div className="flex gap-20 justify-center">
          <ContactForm />
          {/* <Socials /> */}
        </div>
      </div>
    </div>
  );
}
