import { UserIcon } from "@heroicons/react/24/solid";

export const Nav = () => {
  return (
    <header className="flex pt-4 py-4 bg-sky-500 mb-2 items-center justify-around max-sm:justify-between">
      <div className="flex items-center w-100">
        <img
          className="flex max-md:w-10 md:w-10 xl:w-16"
          src="/iconArg.png"
          alt="icon"
        />
        <p className="ml-auto font-bold md:text-xl xl:text-5xl animate-pulse text-gradient-argentina">
          My tinerary
        </p>
      </div>
      <nav className="flex items-center space-x-2 font-bold md:space-x-4 md:text-xl xl:text-2xl">
        <a className="text-black font-semibold hover:text-yellow-300" href="/">
          Home
        </a>
        <a className="text-black font-semibold hover:text-yellow-300" href="/cities">
          Cities
        </a>
        <a
          className="flex items-baseline gap-1 py-1 px-1 text-white font-semibold bg-black rounded hover:text-yellow-300"
          href="#"
        >
          <UserIcon className="h-4 w-4" /> Login
        </a>
      </nav>
    </header>
  );
};
