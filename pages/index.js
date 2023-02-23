import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import MyPhoto from "../public/images/myPhoto.png";

export default function Home() {
  return (
    <div className="flex flex-row justify-between px-40 bg-lgray">
      <div className="flex flex-col justify-around py-52 text-blue ">
        <Link href="https://twitter.com/lukakucancode">
          <FontAwesomeIcon icon={faTwitter} className="py-4 text-5xl" />
        </Link>
        <Link href="https://github.com/ernestmalcolm">
          <FontAwesomeIcon icon={faGithub} className="py-4 text-5xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/ernestmwinchumu/">
          <FontAwesomeIcon icon={faLinkedin} className="py-4 text-5xl" />
        </Link>
      </div>
      <div className="text-3xl text-blue w-2/4 pt-8">
        <h1 className="py-4 text-5xl font-semibold leading-normal">
          Hello <br /> <spam className="text-red">I'm Ernest</spam>
        </h1>
        <p className="leading-loose">
          Im a Software Developer specializing in Front-end Web development and
          creating appealing UI Designs
        </p>
      </div>
      <div className="flex flex-col justify-around py-28 text-blue mr-4">
        <Image src={MyPhoto} height={400} width={400} />
      </div>
    </div>
  );
}
