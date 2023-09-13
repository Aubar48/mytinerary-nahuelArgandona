import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user_actions from "../redux/actions/users.js";
const { signinGoogle } = user_actions;
import Swal from "sweetalert2";
// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function () {
  let googleButton = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCredentialResponse = async (response) => {
    const data = { token_google: response.credential };
    dispatch(signinGoogle({ data }))
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
  };
  useEffect(() => {
    window.onload = function () {
      // eslint-disable-next-line no-unused-vars
      /* global google */
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_ID,
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div ref={googleButton}></div>;
}
