import React, { useState, useRef } from "react";
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
    <form
      id="myForm"
      className="py-10 min-h-[78.5vh] flex flex-col items-center gap-2"
    >
      <Input
        ref={name}
        type="text"
        label="Name"
        variant="bordered"
        placeholder="Enter your name"
        className="max-w-xs"
      />
      <Input
        ref={lastName}
        type="text"
        label="Last Name"
        variant="bordered"
        placeholder="Enter your last name"
        className="max-w-xs"
      />
      <Input
        ref={mail}
        type="email"
        label="Email"
        variant="bordered"
        placeholder="Enter your email"
        className="max-w-xs"
      />
      <Input
        ref={photo}
        type="text"
        label="Photo"
        variant="bordered"
        placeholder="Enter link photo online"
        className="max-w-xs"
      />
      <Input
        ref={password}
        label="Password"
        variant="bordered"
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
        className="max-w-xs"
      />
      <Input
        ref={country}
        type="text"
        label="Country"
        variant="bordered"
        placeholder="Enter your country"
        className="max-w-xs"
      />

      <div className="flex flex-row items-center gap-5">
        <Button
          type="button"
          radius="full"
          onClick={handleSignUp}
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Sign Up
        </Button>

        <Button
          type="button"
          radius="full"
          onClick={handleReset}
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Reset
        </Button>
      </div>

      <p>
        Already have an account?{"  "} 
        <Link className="p-1 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};
