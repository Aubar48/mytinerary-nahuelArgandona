import { useRef, useEffect } from "react";
import apiUrl from "../apiUrl";
import axios from "axios";
export default function Google() {
  let googleButton = useRef();
  const handleCredentialResponse = async (response) => {
    console.log(response);
    const data = { token_google: response.credential };
    const userResponse = await axios.post(apiUrl + "/auth/google", data);
    console.log(userResponse);
  };
  useEffect(() => {
    window.onload = function () {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(googleButton.current, {
        theme: "filled_black",
        size: "medium",
        type: "standard",
        text: "signin_with",
        shape: "rectangular",
      });
    };
  }, []);
  return <div ref={googleButton}></div>;
}
