import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <div className="w-full h-auto flex flex-row justify-center gap-8 mb-16">
      <div className="rounded bg-darkblue w-1/3 h-full flex-col"></div>
      <div className="flex-col w-1/3 h-1/5 mt-12 ">
        <div className="text-red flex-row text-2xl font-bold">
          Title of Project
        </div>
        <div className="rounded bg-blue w-full h-36 flex-row"></div>
        <div className="flex-row text-2xl">
          <Link href="https://github.com/ernestmalcolm">
            <FontAwesomeIcon
              icon={faGithub}
              className="py-4 px-4 text-5xl hover:text-red"
            />
          </Link>
          <Link href="https://github.com/ernestmalcolm">
            <FontAwesomeIcon
              icon={faLink}
              className="py-4 text-5xl hover:text-red"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
