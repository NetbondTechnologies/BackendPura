import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
export default function Sign2() {
  return (
    <div className="bg-gray-200 w-full flex h-screen justify-center items-center">
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="w-[70%] bg-background-sky flex flex-col lg:flex-row lg:h-[75%] h-[60%] shadow-2xl shadow-background-outline-background-sky"
      >
        <div className="lg:w-1/2 w-full h-40 lg:h-full flex items-center">
          <img
            className="animate-pulse w-64 h-20 m-12 lg:m-20 lg:h-56 lg:w-64"
            src="/userlogin.svg"
            alt="User"
          />
        </div>
        <form className="flex bg-white flex-col w-full lg:w-1/2 h-full shadow-2xl p-2 gap-4 justify-center items-center">
          <h1 className="font-bold text-background-outline-background-sky mt-4 lg:mb-4 lg:mt-0 text-2xl">
            SIGN IN
          </h1>
          <input
            className="lg:w-60 w-40 p-2 h-10 focus:outline-background-sky border border-gray-400 lg:text-lg rounded-lg"
            placeholder="Username"
            type="text"
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 focus:outline-background-sky border border-gray-400 lg:text-lg rounded-lg"
            placeholder="Email"
            type="email"
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 focus:outline-background-sky border border-gray-400 lg:text-lg rounded-lg"
            placeholder="Password"
            type="password"
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 focus:outline-background-sky border border-gray-400 lg:text-lg rounded-lg"
            placeholder="Confirm Password"
            type="password"
          />

          <button
            className="bg-background-outline-background-sky p-2 text-white bg-background-sky h-8 lg:h-10 w-28 text-sm lg:w-60 rounded-2xl font-bold
          hover:shadow-lg hover:bg-background-outline-background-sky hover:shadow-background-outline-background-sky"
            type="submit"
          >
            SIGN IN
          </button>
          <p className="text-sm flex flex-col lg:flex-row items-center">
            Already have an account ?
            <Link to="/login" className="text-background-outline-background-sky p-2 text-lg font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
