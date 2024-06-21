import Image from "next/image";
import Logo from "../public/images/EM_.png";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-between px-20 py-2 bg-lgray">
      <div>
        <Image
          src={Logo}
          alt="My logo "
          height={100}
          width={100}
          className=""
        />
      </div>
      <div>
        <ul className="no-underline list-none flex flex-row justify-between float-right text-xl">
          <li className="p-6 text-blue hover:text-red">
            <a href="#">Home</a>
          </li>
          <li className="p-6 text-blue hover:text-red">
            <a href="#about">About</a>
          </li>
          <li className="p-6 text-blue hover:text-red">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-6 text-blue hover:text-red">
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
