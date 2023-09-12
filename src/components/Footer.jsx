import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  const socialMedia = [
    {
      id: "1",
      name: "Facebook",
      urls: "https://www.facebook.com/",
    },
    {
      id: "2",
      name: "Instagram",
      urls: "https://www.instagram.com/?hl=es-la",
    },
    {
      id: "3",
      name: "Linkedin",
      urls: "https://www.linkedin.com/feed/",
    },
  ];
  return (
    <>
      <div className=" relative mt-1 flex flex-col md:flex-row items-center md:justify-evenly bg-sky-500 py-7 md:text-xl xl:text-2xl font-bold">
        <div className="flex items-center">
          <p className="drop-shadow font-bold md:text-xl xl:text-4xl animate-pulse text-gradient-argentina">
            Mytinerary
          </p>
          <img
            className="max-md:w-10 md:w-10 xl:w-10"
            src="/logo.png"
            alt="icon"
            data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="400"
            data-aos-duration="2000"
          />
        </div>

        <nav className="flex md:space-x-4 text-base mt-4 md:mt-0 max-sm:gap-2 max-sm:py-2 max-xl:mr-10 xl:mr-36 font-serif">
          <NavLink
            className="focus:bg-sky-700 hover:bg-secondary rounded-xl py-2 px-4 bg-white hover:text-yellow-300 border-solid items-center "
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className="focus:bg-sky-700 hover:bg-secondary rounded-xl py-2 px-4 bg-white hover:text-yellow-300 items-center "
            to={"/cities"}
          >
            Cities
          </NavLink>
        </nav>
        <div className="flex gap-2 h-auto">
          {socialMedia.map((url, index) => (
            <SocialIcon
              key={index}
              bgColor="white"
              fgColor="blue"
              style={{ width: 40, height: 40 }}
              url={url.urls}
            />
          ))}
        </div>
      </div>
    </>
  );
};
