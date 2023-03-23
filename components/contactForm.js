export default function ContactForm() {
  return (
    <div className="flex justify-center">
      <form
        action="/send-data-here"
        method="post"
        className="flex flex-col flex-wrap w-3/5 text-red"
      >
        <div className="flex flex-row w-full gap-8">
          <div className="mb-4">
            <input
              className="placeholder:text-xl placeholder:text-red bg-lgray  shadow appearance-none border rounded w-full py-3 px-3 text-red leading-tight focus:outline-none "
              id="name"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="mb-8">
            <input
              className="placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none"
              id="secondname"
              type="text"
              placeholder="Second name"
            />
          </div>
        </div>
        <div className="mb-8">
          <input
            className="placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-8">
          <input
            className="placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none"
            id="phonenumber"
            type="number"
            placeholder="Phone number"
            label="Phone number"
          />
        </div>

        <div className="mb-8">
          <input
            className="placeholder:text-xl placeholder:text-red bg-lgray shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none"
            id="message"
            type="text"
            placeholder="Message"
          />
        </div>
        <button
          type="submit"
          className="bg-darkblue hover:outline outline-red py-2 rounded focus:outline-none"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
