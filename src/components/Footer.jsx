export const Footer = () => {
  return (
    <div
      className="grid grid-cols-1 p-8 bg-sky-500 max-md:mt-5 md:mt-20 max-lg:mt-56 xl:mt-5
    md:text-xl xl:text-2xl font-bold"
    >
      <p className="ml-auto font-bold md:text-xl xl:text-5xl animate-pulse text-gradient-argentina">
        My tinerary
      </p>
      <img
        className="flex max-md:w-10 md:w-10 xl:w-16"
        src="/iconArg.png"
        alt="icon"
      />
      Nahuel Argandoña 2023 MindHubLA
      <nav className="space-x-2 font-bold md:space-x-4 md:text-xl xl:text-2xl">
        <a className=" text-black font-semibold hover:text-yellow-300" href="#">
          Home
        </a>
        <a className=" text-black font-semibold hover:text-yellow-300" href="#">
          Cities
        </a>
      </nav>
    </div>
  );
};
