import { useState, useRef } from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Link, useNavigate } from "react-router-dom";
import { Select, SelectItem } from "@nextui-org/react";
import { countries } from "./data";
import  Google  from "../components/Google";
import { useDispatch } from "react-redux";
import user_actions from "../redux/actions/users.js";
const { signup } = user_actions;
import Swal from "sweetalert2";
export const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const toggleVisibility = () => setIsVisible(!isVisible);
  const dispatch = useDispatch();
  const name_signup = useRef("");
  const lastName_signup = useRef("");
  const mail_signup = useRef("");
  const photo_signup = useRef("");
  const password_signup = useRef("");
  const country_signup = useRef("");

  async function handleSignUp() {
    let data = {
      name: name_signup.current.value,
      lastName: lastName_signup.current.value,
      mail: mail_signup.current.value,
      photo: photo_signup.current.value,
      password: password_signup.current.value,
      country: country_signup.current.value,
    };
    dispatch(signup({ data }))
      .then((res) => {
        if (res.payload.token) {
          Swal.fire({
            icon: "success",
            title: "Register in!",
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

  const handleReset = () => {
    const form = document.getElementById("myForm");
    form.reset();
  };

  return (
    <>
      <div
        className="multi_bg_example font-serif"
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <div className="relative flex flex-col justify-center min-h-[79.4vh]">
          <img
            className="p-5 absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/logo.png"
            height={"300"}
            width={"300"}
            alt=""
          />
          <marquee direction="left">
            <img src="/avion.png" height={"300"} width={"300"} alt="" />
          </marquee>
          <marquee direction="right">
            <img
              src="/avion_2.png"
              height={"300"}
              width={"300"}
              alt=""
            />
          </marquee>

          <form
            id="myForm"
            className="relative flex flex-col items-center gap-2 "
          >
              <Google />
            <Input
              ref={name_signup}
              type="text"
              label="Name"
              placeholder="Enter your name"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Input
              ref={lastName_signup}
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Input
              ref={mail_signup}
              type="email"
              label="Email"
              placeholder="Enter your email"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Input
              ref={photo_signup}
              type="text"
              label="Photo"
              placeholder="Enter link photo online"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Input
              ref={password_signup}
              label="Password"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
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
            <Select
              ref={country_signup}
              items={countries}
              label="Country"
              placeholder="Select an country"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            >
              {(countries) => (
                <SelectItem key={countries.value}>{countries.label}</SelectItem>
              )}
            </Select>

            <div className="flex flex-row items-center gap-5">
              <Button
                type="button"
                radius="full"
                onClick={handleSignUp}
                className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                Register
              </Button>

              <Button
                type="button"
                radius="full"
                onClick={handleReset}
                className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                Reset
              </Button>
            </div>

            <p className="font-semibold">
              Already have an account?{"  "}
              <Link
                className="font-semibold p-1 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                to="/signin"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
