export const Card = () => {
  return (
    <div className="flex max-md:justify-center border rounded-lg h-auto w-auto">
      <img
        className="object-cover max-md:w-1/4 max-md:h-auto h-auto md:w-1/2 rounded-lg"
        src="./public/trelew1.jpg"
        alt=""
      />
      <div className="flex flex-col max-md:justify-center md:justify-between">
        <h5 className="flex justify-center font-bold h-auto text-black md:mt-5">
          El Museo Regional Pueblo de Luis en Trelew.
        </h5>
        <p className="font-normal h-auto text-gray-700 dark:text-gray-400">
          Expone, a lo largo de siete salas completisimas, aspectos de la
          historia de la ciudad así como de la vida cotidiana y costumbres de
          los pueblos originarios y los colonos. Se muestra también cómo fue el
          surgimiento del ferrocarril y testimonios de viajeros que exploraron
          las costas patagónicas entre el siglo XVI y el siglo XIX.
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
