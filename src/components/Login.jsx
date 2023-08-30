import React, { useRef } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const navigate = useNavigate(); // Importante: Utiliza useNavigate para la navegación programática
  const toggleVisibility = () => setIsVisible(!isVisible);

  const mail = useRef();
  const password = useRef();
  async function handleSignIn() {
    try {
      const data = {
        mail: mail.current.value,
        password: password.current.value,
      };
      console.log("Usuario logeado exitosamente");
      console.log(data);
      // Redirige al usuario al "home"
      navigate("/"); // Reemplaza "/" con la URL de tu página principal (el "home")
    } catch (error) {
      console.error("Error al logear con el usuario:", error);
    }
  }
  return (
    <>
      <div className="bg-slate-500">
        <div className="flex flex-col justify-center min-h-[78.5vh] ">
          <form className="flex flex-col items-center gap-5 ">
            <Input
              ref={mail}
              type="email"
              label="Email"
              placeholder="Enter your email"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400"
            />

            <Input
              ref={password}
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
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400"
            />
            <Button
              radius="full"
              onClick={handleSignIn}
              className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Login
            </Button>
            <p>
              Do not have an account?{"  "}{" "}
              <Link
                className="font-semibold p-1 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                to="/register"
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
