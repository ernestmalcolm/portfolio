import Image from "next/image";
import otherPhoto from "../public/images/round.jpg";

export default function About() {
  return (
    <div className="text-3xl text-lgray bg-blue w-full">
      <h1 className="py-4 text-5xl flex justify-center pt-10">About Me</h1>
      <hr className="text-red w-1/5 h-2 mx-auto my-1 bg-red rounded" />
      <div className="flex flex-row justify-center gap-12 pt-6">
        <Image
          src={otherPhoto}
          alt="My Photo"
          height={"auto"}
          width={"auto"}
          className="rounded-2xl w-1/4 z-10 h-72"
        />
        <div className="w-1/2 z-20 pt-6">
          <p className="leading-loose font-normal text-2xl">
            I'm a Software Developer specializing in Front-end Web development
            and creating appealing UI Designs. I'm a Software Developer
            specializing in Front-end Web development and creating appealing UI
            Designs
          </p>
        </div>
        <h1 className="absolute text-9xl font-semibold z-0 opacity-20 pt-10">ABOUT</h1>
      </div>
    </div>
  );
}
