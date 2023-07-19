"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex w-2/5 flex-col z-20">
      <Link href="mailto:gmem200197@gmail.com" legacyBehavior>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="py-4 text-4xl hover:text-red"
        />
      </Link>
      <Link href="mailto:gmem200197@gmail.com" legacyBehavior>
        <FontAwesomeIcon
          icon={faPhone}
          className="py-4 text-4xl hover:text-red"
        />
      </Link>
      <Link href="https://twitter.com/lukakucancode" legacyBehavior>
        <FontAwesomeIcon
          icon={faTwitter}
          className="py-4 text-4xl hover:text-red"
        />
      </Link>
      <Link href="https://github.com/ernestmalcolm" legacyBehavior>
        <FontAwesomeIcon
          icon={faGithub}
          className="py-4 text-4xl hover:text-red"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/ernestmwinchumu/" legacyBehavior>
        <FontAwesomeIcon
          icon={faLinkedin}
          className="py-4 text-4xl hover:text-red"
        />
      </Link>
    </div>
  );
}
