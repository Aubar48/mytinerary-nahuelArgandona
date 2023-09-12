import { useRef, useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../redux/actions/users.js";
const { signin } = user_actions;
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
export const Login = () => {
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    dispatch(signin({ data }))
      .then((res) => {
        if (res.payload.token) {
          Swal.fire({
            icon: "success",
            title: "Logged in!",
          });
          navigate("/");
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
  }

  return (
    <>
      <div
        className="multi_bg_example font-serif"
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <div className="relative flex flex-col justify-center min-h-[79.4vh] ">
          <img
            className="p-5 absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/logo.png"
            height={"300"}
            width={"300"}
            alt=""
          />
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

          <div className="flex justify-center mb-1">
            <GoogleOAuthProvider clientId="556361593309-273209v1049174bi15mjlnqui3fae8s9.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const infoUser = jwtDecode(credentialResponse.credential);
                  console.log(infoUser);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>

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
