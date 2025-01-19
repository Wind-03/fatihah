import Logo from "../../public/assets/footerlogo.png";
import twitter from "../../public/assets/Twitter.png";
import facebook from "../../public/assets/facebook.png";
import footerlink from "../../public/assets/footerlink.png";
// import footerlink from 'assets/footerlink.png'
import { menuItems } from "../Utils/data";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Add a console.log to verify the function is being called
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);

    if (!validateEmail(email)) {
      setValidationMessage("Please enter a valid email address");
      return;
    }

    alert("Thank you for subscribing to our newsletter! 🎉");
    setEmail("");
  };

  return (
    <section className=" text-accent  lg:px-10 lg:px-15  mt-6 ">
      <div className="bg-secondary lg:rounded-t-3xl md:p-14 px-5 py-8 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between ">
          <div className="flex  items-center gap-2">
            <img src={Logo} alt="Logo" className="w-[20%]" />
            <h1 className="text-2xl font-bold md:text-3xl">Positivus</h1>
          </div>

          {/* Mobile Menu */}
          <div className="flex flex-col gap-4 items-center cursor-pointer lg:flex-row lg:gap-8 lg:items-start ">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="hover:bg-primary hover:box-decoration-clone hover:text-secondary hover:px-1 hover:py-1 hover:rounded-md md:text-md"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Socail Media logos */}

          <div className="hidden lg:flex gap-2 lg:gap-5 ">
            <img src={twitter} alt="twitter" className="w-7 " />
            <img src={facebook} alt="facebook" className="w-7" />
            <img src={footerlink} alt="" className="w-7" />
          </div>
        </div>

        <div className="flex flex-col lg:items-start items-center gap-5 ">
          <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:items-center lg:justify-between w-full ">
            <div className="flex flex-col items-center gap-5 lg:items-start  md:text-md ">
              <header className="mt-5">
                <h1 className="font-bold text-xl text-secondary lg:mb-5  ">
                  <span className="bg-primary box-decoration-clone px-1 rounded-md md:texlgxl">
                    Contact Us:
                  </span>
                </h1>
              </header>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>

            <div className="bg-faint p-5 rounded-2xl py-8 lg:w-3/5">
              <form
                className="flex flex-col gap-5 lg:flex-row md:text-md lg:justify-between md:px-8 lg:px-2"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col lg:w-1/2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setValidationMessage("");
                    }}
                    placeholder="Email"
                    required
                    className="p-3 rounded-lg text-accent bg-faint border-accent border md:py-4"
                  />
                  {validationMessage && (
                    <p className="text-sm text-red-500 mt-1">
                      {validationMessage}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="border-2 text-secondary px-4 py-3 rounded-lg bg-primary hover:text-secondary transition-colors font-bold md:py-4 lg:w-1/2"
                >
                  Subscribe to news
                </button>
              </form>
            </div>
          </div>

          {/* Socail Media logos */}

          <div className="lg:hidden flex gap-5 ">
            <img src={twitter} alt="twitter" className="w-6 md:w-10" />
            <img src={facebook} alt="facebook" className="w-6 md:w-10" />
            <img src={footerlink} alt="" className="w-6 md:w-10" />
          </div>

          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start border-t border-accent md:w-full md:text-md mt-5 py-5">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="">Privacy policy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
