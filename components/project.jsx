export default function Project() {
  return (
    <div className="w-full h-auto flex flex-row justify-center gap-8 mb-16">
      <div className="rounded bg-darkblue w-1/3 h-full flex-col"></div>
      <div className="flex-col w-1/3 h-1/5 mt-12 ">
        <div className="text-red flex-row text-2xl font-bold">
          Title of Project
        </div>
        <div className="rounded bg-blue w-full h-36 flex-row"></div>
      </div>
    </div>
  );
}
