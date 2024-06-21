export default function Footer() {
  var year = new Date().getFullYear();

  return (
    <div className="text-red bg-darkblue py-8">
      <div className="flex flex-col justify-center pb-0 pt-8 text-2xl gap-4">
        <p className="text-lgray flex justify-center">
          Designed & Built by Ernest Mwinchumu
        </p>
        <p className="text-lgray flex justify-center">© {year}</p>
      </div>
    </div>
  );
}
