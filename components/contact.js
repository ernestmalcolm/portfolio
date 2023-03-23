import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <div className="text-3xl text-lgray bg-blue w-full pb-24">
      <h1 className="py-4 text-5xl flex justify-center pt-10">Contact Me</h1>
      <h1 className="absolute text-9xl text-lgray font-semibold z-0 pt-1 opacity-20 left-40 right-40">
        CONTACT ME
      </h1>
      <hr className="text-red w-1/5 h-2 mx-auto my-1 bg-red rounded" />
      <p className="leading-loose font-normal text-2xl flex justify-center pt-2 pb-6">
        Here are some things I have built and designed
      </p>
      <ContactForm />
    </div>
  );
}
