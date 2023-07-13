import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import MyPhoto from "../public/images/myPhoto.png";

export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-row justify-between px-20 bg-lgray h-4/5">
        <div className="flex flex-col justify-around py-40 pr-12 text-blue ">
          <Link href="https://twitter.com/lukakucancode">
            <FontAwesomeIcon
              icon={faTwitter}
              className="py-4 text-5xl hover:text-red"
            />
          </Link>
          <Link href="https://github.com/ernestmalcolm">
            <FontAwesomeIcon
              icon={faGithub}
              className="py-4 text-5xl hover:text-red"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ernestmwinchumu/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="py-4 text-5xl hover:text-red"
            />
          </Link>
        </div>
        <div className="text-3xl text-blue w-3/4 pl-8 ">
          <h1 className="py-4 text-4xl font-bold leading-normal">
            Hello <br /> <spam className="text-red">I'm Ernest</spam>
          </h1>
          <p className="leading-loose">
            Im a Software Developer specializing in Front-end Web development
            and creating appealing UI Designs
          </p>
          <button className="bg-blue rounded-lg text-lgray py-2 px-6 mt-5 hover:bg-red">
            Contact Me
          </button>
        </div>
        <div className="flex flex-col justify-around py-28 text-blue mr-4">
          <Image src={MyPhoto} alt="My Photo" height={400} width={400} />
        </div>
      </div>
    </div>
  );
}
