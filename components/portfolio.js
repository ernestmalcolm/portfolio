import Project from "./project";

export default function Portfolio() {
  return (
    <div className="text-blue pb-16">
      <h1 className="py-4 text-5xl flex justify-center pt-10">Portfolio</h1>
      <h1 className="absolute text-9xl font-semibold -z-10 pt-1 opacity-20 left-1/4 right-1/4">
        PORTFOLIO
      </h1>
      <hr className="text-red w-1/5 h-2 mx-auto my-1 bg-red rounded" />
      <p className="leading-loose font-normal text-2xl flex justify-center pt-2 pb-8">
        Here are some things I have built and designed
      </p>
      <div className="flex flex-row flex-wrap basis-full z-10">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
