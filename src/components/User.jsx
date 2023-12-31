import { useSelector } from "react-redux";

export default function Users() {
  //const store = useSelector(store=> store)
  //console.log(store);
  //const user_reducer = useSelector(store => store.users)
  //console.log(user_reducer);
  const user_state = useSelector((store) => store.users.users);
  //console.log(user_state);
  return (
    <div className="w-[360px] hidden md:flex md:flex-wrap">
      {user_state?.map((each) => (
        <img
          src={each.photo}
          key={each._id}
          className="bg-white w-1/2 h-1/3 object-cover"
        />
      ))}
    </div>
  );
}
