import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../../redux/authSlice";
import classes from "./AuthDisplay.module.css";

export default function AuthDisplay() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );
  }

  if (localId !== null) {
    navigate("/");
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  return (
    <form className={classes.inputs} onSubmit={onAuthStart}>
      {errorOutput}
      <label>
        <div>Email:</div>
        <input type="email" name="email" />
      </label>
      <label>
        <div> Password:</div>
        <input type="password" name="password" />
      </label>

      <div className={classes.buttons}>
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </form>
  );
}
