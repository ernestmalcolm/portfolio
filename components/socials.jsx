import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export default function Socials() {
  return (
    <div className="flex flex-col w-1/5 gap-6 z-20">
      <a
        href="mailto:gmem200197@gmail.com"
        className="flex items-center hover:text-red "
      >
        <IconMail className=" size-16 text-red py-4 text-4xl mr-4" />
        gmem200197@gmail.com
      </a>
      <a href="tel:+255742200105" className="flex items-center hover:text-red">
        <IconPhone className="size-16 text-red py-4 text-4xl hover:text-red mr-4" />
        +255 742 200 105
      </a>
      <a
        href="https://twitter.com/lukakucancode"
        className="flex items-center hover:text-red"
      >
        <IconBrandX className="size-16 text-red py-4 text-4xl hover:text-red mr-4" />
        @lukakucancode
      </a>
      <a
        href="https://github.com/ernestmalcolm"
        className="flex items-center hover:text-red"
      >
        <IconBrandGithub className=" size-16 text-red py-4 text-4xl hover:text-red mr-4" />
        @ernestmalcolm
      </a>
      <a
        href="https://www.linkedin.com/in/ernestmwinchumu/"
        className="flex items-center hover:text-red"
      >
        <IconBrandLinkedin className="size-16 text-red py-4 text-4xl hover:text-red mr-4" />
        Ernest Mwinchumu
      </a>
    </div>
  );
}
