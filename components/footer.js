import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  var year = new Date().getFullYear();

  return (
    <div className="text-red bg-darkblue py-4">
      <div className="flex flex-row py-8 justify-center gap-24">
        <div className="">
          <Link href="https://www.linkedin.com/in/ernestmwinchumu/">
            <FontAwesomeIcon
              icon={faPhone}
              className="px-4 text-3xl hover:text-red"
            />
            <text className="text-xl text-lgray ">+255 742 200 105</text>
          </Link>
        </div>
        <div className="">
          <Link href="https://www.linkedin.com/in/ernestmwinchumu/">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="px-4 text-3xl hover:text-red"
            />
            <text className="text-xl text-lgray">gmem200197@gmail.com</text>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-32 py-8 text-blue ">
        <Link href="https://twitter.com/lukakucancode">
          <FontAwesomeIcon icon={faTwitter} className="text-5xl text-red" />
        </Link>
        <Link href="https://github.com/ernestmalcolm">
          <FontAwesomeIcon icon={faGithub} className="text-5xl text-red" />
        </Link>
        <Link href="https://www.linkedin.com/in/ernestmwinchumu/">
          <FontAwesomeIcon icon={faLinkedin} className="text-5xl text-red" />
        </Link>
      </div>
      <div className="flex flex-col justify-center pb-16 pt-8 text-2xl gap-4">
        <p className="text-lgray flex justify-center">
          Designed & Built by Ernest Mwinchumu
        </p>
        <p className="text-lgray flex justify-center">© {year}</p>
      </div>
    </div>
  );
}
