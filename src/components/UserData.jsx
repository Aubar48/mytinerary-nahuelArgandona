/* eslint-disable react/prop-types */
export default function Users({ user, show, setShow }) {
  return (
    <div className="font-serif text-gray-950 border-solid border-2 shadow-amber-400 shadow-md border-amber-400 w-[400px] h-[600px] flex flex-col justify-center items-center bg-tertiary sm:bg-white p-[20px] mt-[20px] md:mt-0">
      <img className="h-full object-cover border-2 shadow-purple-500 shadow-md border-purple-500" src={user.photo} />
      <div className="flex justify-center gap-2">
      <p className="text-center">{user.name}</p>
      <p className="text-center">{user.lastName}</p>
      </div>
      <p className="text-center"> {user.mail} </p>
      <p className="text-center">{user.country}</p>
      
      {show ? (
        <input
          type="button"
          className="w-full shadow bg-purple-500 hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Hide!"
          onClick={() => setShow(!show)}
        />
      ) : (
        <input
          type="button"
          className="w-full shadow bg-purple-500 hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Update!"
          onClick={() => setShow(!show)}
        />
      )}
    </div>
  );
}
