import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

export default function Login2() {
  return (
    <div className=" w-full flex h-screen justify-center items-center">
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="w-[70%] bg-background-sky flex flex-col items-center lg:flex-row lg:h-[75%] h-[60%] shadow-2xl shadow-buttext-button-orange"
      >
        <div className="lg:w-1/2 w-full h-40 lg:h-full flex items-center">
          <img
            className="animate-pulse w-64 h-20 m-12 lg:m-20 lg:h-56 lg:w-64"
            src="/userlogin.svg"
            alt="User"
          />
        </div>
        <form className="flex w-full bg-white flex-col h-full p-2 lg:w-1/2 gap-4 justify-center items-center">
          <h1 className="text-2xl text-button-orange font-bold mt-4 lg:mt-0">LOGIN</h1>
          <input
            className="lg:w-60 w-40 p-2 h-10 border lg:text-lg focus:outline-buttext-button-orange border-gray-400 rounded-lg"
            type="email"
            placeholder="Email"
          />
          <input
            className="lg:w-60 w-40 p-2 h-10  lg:h-10 border  focus:outline-buttext-button-orange lg:text-lg border-gray-400 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <button className="lg:w-60 w-28 h-8 text-sm lg:h-10 p-2 text-white bg-background-sky rounded-2xl font-bold bg-buttext-button-orange hover:bg-buttext-button-orange hover:shadow-lg hover hover:shadow-buttext-button-orange">
            LOGIN
          </button>
          <p className="flex items-center flex-col lg:flex-row">
            No account ?
            <Link to="/signup" className="text-button-orange font-bold text-lg p-2">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
