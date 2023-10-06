/* eslint-disable react/prop-types */
export default function Users({ user, show, setShow }) {
  return (
    <div className="rounded-2xl font-serif text-gray-950 w-[400px] h-[600px] flex flex-col justify-center items-center p-[20px] mt-[20px] md:mt-0">
      <img className="rounded-2xl h-full object-cover border-2 shadow-amber-400 shadow-md border-amber-400" src={user.photo} />
      <p className="text-center  m-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-400">{user.name}  {user.lastName}</p>
      <p className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-400"> {user.mail} </p>
      <p className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-400">{user.country}</p>
      
      {show ? (
        <input
          type="button"
          className="w-full shadow bg-amber-400 hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Hide!"
          onClick={() => setShow(!show)}
        />
      ) : (
        <input
          type="button"
          className="w-full shadow bg-amber-400 hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Update!"
          onClick={() => setShow(!show)}
        />
      )}
    </div>
  );
}
