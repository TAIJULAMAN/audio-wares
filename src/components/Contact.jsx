import Button from "../layouts/Button";

const Contact = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-slate-300 bg-no-repeat bg-cover opacity-80">
      <h1 className="text-4xl font-semibold mt-24 lg:mt-10 text-center lg:text-start text-blue-400">
        Contact Us
      </h1>

      <form className=" text-white mt-10 w-full">
        <div className=" flex flex-col lg:flex-row gap-8 lg:justify-between">
          <div className=" w-full">
            <input
              type="text"
              id="userName"
              placeholder="First Name"
              className=" bg-transparent border-2 border-blue-400 rounded-md outline-none w-full px-4 py-1"
            />
          </div>
          <div className=" w-full">
            <input
              type="text"
              id="userName"
              placeholder="Last Name"
              className=" bg-transparent border-2  border-blue-400 rounded-md outline-none w-full px-4 py-1"
            />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-8 lg:justify-between mt-8 lg:mt-4">
          <div className="w-full">
            <input
              type="text"
              id="userName"
              placeholder="Your Email"
              className=" bg-transparent border-2  border-blue-400 rounded-md outline-none w-full px-4 py-1"
            />
          </div>
          <div className=" w-full">
            <input
              type="text"
              id="userName"
              placeholder="Your Number"
              className="bg-transparent border-2  border-blue-400 border-blue-400 rounded-md outline-none w-full px-4 py-1"
            />
          </div>
        </div>
        <div className="mt-4">
          <textarea
            name="userMessage"
            id="userMessage"
            cols="50"
            rows="5"
            placeholder="Enter your message"
            className=" bg-transparent border-2  border-blue-400 rounded-md outline-none px-4 py-1 w-full"
          ></textarea>
        </div>

        <div className=" flex flex-row justify-center mt-4">
          <Button title="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
