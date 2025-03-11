import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import translation hook
import Loader from "../loader/loader";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Signup() {
  const { t } = useTranslation(); // Initialize translation hook
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [matchPassword, setMatchPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (matchPassword !== credentials.password) {
      setError(t("password_mismatch"));
      return;
    }
    setError("");
    console.log("User Data:", credentials);
  };

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center h-[65vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-gray-200 w-full flex h-screen justify-center items-center">
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        className="w-[70%] bg-background-sky flex flex-col lg:flex-row lg:h-[75%] h-[60%] shadow-2xl"
      >
        <div className="lg:w-1/2 w-full h-40 lg:h-full flex items-center">
          <img
            className="animate-pulse w-64 h-20 m-12 lg:m-20 lg:h-56 lg:w-64"
            src="/userlogin.svg"
            alt="User"
          />
        </div>
        <form
          onSubmit={handleSignup}
          className="flex bg-white flex-col w-full lg:w-1/2 h-full shadow-2xl p-2 gap-4 justify-center items-center"
        >
          <h1 className="font-bold text-background-outline-background-sky mt-4 lg:mb-4 lg:mt-0 text-2xl">
            {t("signup")}
          </h1>
          <input
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 lg:text-lg rounded-lg"
            placeholder={t("username_placeholder")}
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 lg:text-lg rounded-lg"
            placeholder={t("email_placeholder")}
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 lg:text-lg rounded-lg"
            placeholder={t("password_placeholder")}
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 lg:text-lg rounded-lg"
            placeholder={t("confirm_password_placeholder")}
            type="password"
            value={matchPassword}
            onChange={(e) => setMatchPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            className="bg-background-outline-background-sky p-2 text-white bg-background-sky h-8 lg:h-10 w-28 text-sm lg:w-60 rounded-2xl font-bold hover:shadow-lg"
            type="submit"
          >
            {t("signup_button")}
          </button>
          <p className="text-sm flex flex-col lg:flex-row items-center">
            {t("already_account")}
            <Link
              to="/login"
              className="text-background-outline-background-sky p-2 text-lg font-bold"
            >
              {t("login")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
