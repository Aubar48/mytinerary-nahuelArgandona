import { useState, useRef } from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Importante: Utiliza useNavigate para la navegación programática

  const toggleVisibility = () => setIsVisible(!isVisible);

  const name = useRef();
  const lastName = useRef();
  const mail = useRef();
  const photo = useRef();
  const password = useRef();
  const country = useRef();

  async function handleSignUp() {
    try {
      const data = {
        name: name.current.value,
        lastName: lastName.current.value,
        mail: mail.current.value,
        photo: photo.current.value,
        password: password.current.value,
        country: country.current.value,
      };

      await axios.post("http://localhost:3000/api/users/register", data);
      console.log("Usuario creado exitosamente");

      // Redirige al usuario al "home"
      navigate("/"); // Reemplaza "/" con la URL de tu página principal (el "home")
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  }

  const handleReset = () => {
    // Obtén una referencia al formulario
    const form = document.getElementById("myForm"); // Reemplaza 'myForm' con el ID de tu formulario

    // Restablece el formulario
    form.reset();
  };

  return (
    <>
      <div
        className="bg-slate-500"
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <div className="flex flex-col justify-center min-h-[78.5vh]">
          <form id="myForm" className=" flex flex-col items-center gap-4 ">
            <Input
              ref={name}
              type="text"
              label="Name"
              placeholder="Enter your name"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Input
              ref={lastName}
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Input
              ref={mail}
              type="email"
              label="Email"
              placeholder="Enter your email"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Input
              ref={photo}
              type="text"
              label="Photo"
              placeholder="Enter link photo online"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
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
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
            <Input
              ref={country}
              type="text"
              label="Country"
              placeholder="Enter your country"
              className="max-w-xs rounded-2xl border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />

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

            <p>
              Already have an account?{"  "}
              <Link
                className="font-semibold p-1 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                to="/login"
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
