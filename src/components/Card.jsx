export const Card = () => {
  return (
    <div className="flex max-md:justify-center border rounded-lg h-auto w-auto shadow-amber-400 shadow-md border-amber-400">
      <img
        className="object-cover max-md:w-1/4 max-md:h-auto h-auto md:w-1/2 rounded-lg"
        src="./public/Regional_Museum.jpg"
        alt=""
      />
      <div className="flex flex-col max-md:justify-center md:justify-between">
        <h5 className="flex justify-center font-bold h-auto text-black md:mt-5">
          The Pueblo de Luis Regional Museum in Trelew.
        </h5>
        <p className="font-normal h-auto text-gray-700 dark:text-gray-400">
          It exposes, throughout seven very complete rooms, aspects of the
          history of the city as well as the daily life and customs of native
          peoples and settlers. It also shows how the rise of the railway and
          testimonies of travelers who explored Patagonian coasts between the
          16th and 19th centuries.
        </p>
        <a
          href="https://losviajesdenena.com/que-ver-y-que-hacer-en-trelew-3/"
          className="flex justify-center items-center w-full  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
          text-white font-bold py-1 px-1 hover:text-yellow-300"
        >
          View More
        </a>
      </div>
    </div>
  );
};
