import { useRef, useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../redux/actions/users.js";
const { signin } = user_actions;

export const Login = () => {
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad de la contraseña

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    dispatch(signin({ data }));
    navigate("/");
  }

  let user = useSelector((store) => store);
  console.log(user);

  return (
    <>
      <div
        className="multi_bg_example font-serif"
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <div className="flex flex-col justify-center min-h-[79.4vh] ">
          <marquee direction="left">
            <img src="/public/avion.png" height={"300"} width={"300"} alt="" />
          </marquee>
          <marquee direction="right">
            <img
              src="/public/avion_2.png"
              height={"300"}
              width={"300"}
              alt=""
            />
          </marquee>
          <form className="flex flex-col items-center gap-3">
            <Input
              ref={mail_signin}
              type="email"
              label="Email"
              placeholder="Enter your email"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />

            <Input
              ref={password_signin}
              label="Password"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Button
              radius="full"
              onClick={handleSignIn}
              className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Login
            </Button>
            <p className="font-semibold">
              Do not have an account?{"  "}{" "}
              <Link
                className="font-semibold p-1 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
