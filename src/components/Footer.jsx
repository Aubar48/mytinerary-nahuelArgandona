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
    <div className="flex flex-col md:flex-row items-center md:justify-around bg-sky-500 mt-2 py-4 md:text-xl xl:text-2xl font-bold">
      <div className="flex items-center">
        <img
          className="w-10 h-auto md:w-10 xl:w-14"
          src="/iconArg.png"
          alt="icon"
        />
        <p className=" font-bold md:text-xl xl:text-5xl animate-pulse text-gradient-argentina">
          Mytinerary
        </p>
      </div>

      <nav className="flex  md:space-x-4 text-base mt-4 md:mt-0 xl:pe-52">
        <NavLink
          className="text-black rounded-xl py-2 px-4 bg-sky-400 hover:text-yellow-300 border-solid  items-center"
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className="text-blue-600 rounded-xl py-2 px-4 bg-sky-400 hover:text-yellow-300  items-center"
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
  );
};
