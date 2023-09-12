import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Display from "./Display";
import Label from "./Label";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../redux/actions/users";
const { signout } = user_actions;
import Swal from "sweetalert2";
export default function NavBar() {
  const navigate = useNavigate();
  let [show, setShow] = useState(false);
  let photo = useSelector((store) => store.users.user?.photo);
  let dispatch = useDispatch();
  let options = [
    { to: "/", title: "Home", show: true },
    { to: "/cities", title: "Cities", show: true },
    {
      to: "/signin",
      title: "Sign In",
      show: photo ? false : true,
    },
    {
      to: "/signup",
      title: "Sign Up",
      show: photo ? false : true,
    },
    {
      to: "/profile",
      title: "Profile",
      show: photo ? true : false,
    },
    {
      title: "Sign Out",
      show: photo ? true : false,
      onClick: () => {
        navigate("/");
        dispatch(signout())
          .then((res) => {
            if (res.payload.messages) {
              Swal.fire({
                icon: "success",
                title: "Logout in!",
              });
            } else if (res.payload.messages.length > 0) {
              let html = res.payload.messages
                .map((each) => `<p>${each}</p>`)
                .join("");
              Swal.fire({
                title: "Something went wrong!",
                icon: "error",
                html,
              });
            }
          })
          .catch((err) => console.log(err));
      },
    },
  ];

  return (
    <header className="h-[87.3px] px-10 mb-1 bg-sky-500 flex justify-start items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[50px] h-[50px] bg-white p-[5px] rounded-xl cursor-pointer
        md:hidden"
        onClick={() => setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {show && <Display options={options} />}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <p className="drop-shadow font-bold md:text-xl xl:text-4xl animate-pulse text-gradient-argentina">
            Mytinerary
          </p>
          <img
            className="max-md:w-10 md:w-10 xl:w-20"
            src="/logo.png"
            alt="icon"
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-offset="400"
            data-aos-duration="2000"
          />
        </div>

        <Label options={options} />
      </div>
    </header>
  );
}
