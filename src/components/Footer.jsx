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
    <div
      className="flex items-center justify-between sm:justify-around md:gap-1 bg-sky-500 mt-2 py-4
    md:text-xl xl:text-2xl font-bold "
    >
      <div className="flex">
        <img
          className="flex max-md:w-10 md:w-10 xl:w-14"
          src="/iconArg.png"
          alt="icon"
        />
        <p className="flex items-center font-bold md:text-xl xl:text-5xl animate-pulse text-gradient-argentina">
          Mytinerary
        </p>
      </div>

      <nav className="space-x-2 font-bold md:space-x-4 md:text-xl xl:text-2xl">
        <a className=" text-black font-semibold hover:text-yellow-300" href="/">
          Home
        </a>
        <a
          className=" text-black font-semibold hover:text-yellow-300"
          href="/cities"
        >
          Cities
        </a>
      </nav>
      <div className="flex gap-2 max-sm:h-1/5 max-sm:w-1/5">
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
