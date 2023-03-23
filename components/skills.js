import Link from "next/link";
import Image from "next/image";
import NextLogo from "../public/images/next-logo.svg";
import TailwindLogo from "../public/images/tailwind-logo.svg";
import HtmlLogo from "../public/images/html5-logo.svg";
import CssLogo from "../public/images/css-logo.svg";
import FigmaLogo from "../public/images/figma-logo.svg";
import JsLogo from "../public/images/js-logo.svg";
import ReactLogo from "../public/images/react-logo.svg";
import SassLogo from "../public/images/sass-logo.svg";

export default function Skills() {
  return (
    <div className="text-3xl text-lgray bg-blue w-full py-8">
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
  );
}
