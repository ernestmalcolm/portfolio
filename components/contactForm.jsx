export default function ContactForm() {
  return (
    <div className="flex w-2/5">
      <form
        action="/send-data-here"
        method="post"
        className="flex flex-col w-full text-red"
      >
        <div className="flex flex-col gap-8 z-20">
          <input
            className="placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3  focus:outline-none"
            id="name"
            type="text"
            placeholder="First name"
          />
          <input
            className="placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3 focus:outline-none"
            id="secondname"
            type="text"
            placeholder="Second name"
          />
          <input
            className="placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3 focus:outline-none"
            id="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3 focus:outline-none"
            id="phonenumber"
            type="number"
            placeholder="Phone number"
            label="Phone number"
          />
          <input
            className=" placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3 focus:outline-none"
            id="message"
            type="text"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-darkblue hover:outline outline-red py-3 rounded focus:outline-none"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
