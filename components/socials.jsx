"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="flex flex-col w-1/5 gap-6 z-20">
      <a href="mailto:gmem200197@gmail.com" className="flex items-center hover:text-red ">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="py-4 text-4xl hover:text-red mr-4"
        />
        gmem200197@gmail.com
      </a>
      <a href="tel:+255742200105" className="flex items-center hover:text-red">
        <FontAwesomeIcon
          icon={faPhone}
          className="py-4 text-4xl hover:text-red mr-4"
        />
        +255 742 200 105
      </a>
      <a href="https://twitter.com/lukakucancode" className="flex items-center hover:text-red">
        <FontAwesomeIcon
          icon={faTwitter}
          className="py-4 text-4xl hover:text-red mr-4"
        />
        @lukakucancode
      </a>
      <a href="https://github.com/ernestmalcolm" className="flex items-center hover:text-red">
        <FontAwesomeIcon
          icon={faGithub}
          className="py-4 text-4xl hover:text-red mr-4"
        />
        @ernestmalcolm
      </a>
      <a href="https://www.aedin.com/in/ernestmwinchumu/" className="flex items-center hover:text-red">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="py-4 text-4xl hover:text-red mr-4"
        />
        Ernest Mwinchumu
      </a>
    </div>
  );
}
