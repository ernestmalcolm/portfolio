import Image from "next/image";
import Link from "next/link";
import MyPhoto from "../public/images/myPhoto.png";

export default function LandingPage() {
  return (
    <div className="flex flex-row justify-between px-40 bg-lgray h-4/5">
      <div className="text-2xl text-blue w-3/5 pl-8 ">
        <h1 className="py-4 text-4xl font-bold leading-normal">
          Hello <br /> <spam className="text-red">I'm Ernest</spam>
        </h1>
        <p className="leading-loose text-3xl">
          Im a Software Developer specializing in Front-end Web development and
          creating appealing UI Designs
        </p>
        <button className="bg-blue rounded-lg text-lgray py-3 px-6 mt-5 hover:bg-red">
          <Link href="#contact" legacyBehavior>
            Contact Me
          </Link>
        </button>
      </div>
      <div className="flex flex-col w-2/5 justify-around py-6 text-blue mr-4">
        <Image src={MyPhoto} alt="My Photo" height={700} width={700} />
      </div>
    </div>
  );
}
