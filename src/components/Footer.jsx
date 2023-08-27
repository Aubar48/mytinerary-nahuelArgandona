import { SocialIcon } from "react-social-icons";

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
    <div className="flex flex-col md:flex-row items-center md:justify-between bg-sky-500 mt-2 py-4 md:text-xl xl:text-2xl font-bold">
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

      <nav className="flex  md:space-x-4 md:text-xl xl:text-2xl mt-4 md:mt-0 xl:pe-44">
        <a
          className="text-black hover:text-yellow-300 border-solid rounded-xl items-center"
          href="/"
        >
          Home
        </a>
        <a
          className="text-black  hover:text-yellow-300 rounded-xl items-center"
          href="/cities"
        >
          Cities
        </a>
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
