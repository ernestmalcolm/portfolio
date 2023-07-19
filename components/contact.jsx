"use client"

import ContactForm from "./contactForm";
import Socials from "./socials";

export default function Contact() {
  return (
    <div className="text-xl text-lgray bg-blue w-full pb-24">
      <h1 className="py-4 text-5xl flex justify-center pt-4">Contact Me</h1>
      <h1 className="absolute text-9xl text-lgray font-semibold z-0 pt-6 opacity-20 left-72">
        CONTACT ME
      </h1>
      <hr className="text-red w-1/5 h-2 mx-auto my-1 bg-red rounded" />
      <p className="leading-loose font-normal text-2xl flex justify-center py-2">
        Reach out to me anytime and I will respond ASAP
      </p>
      <div className="flex gap-20 justify-center">
        <ContactForm />
        {/* <Socials /> */}
      </div>
    </div>
  );
}
