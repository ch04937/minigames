import { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { PlayerContext } from "../utlils/PlayerContext";
import Notification from "./Notification";

const Login = () => {
  const [canSeePassword, setCanSeePassword] = useState(false);
  const { signIn, error } = useContext(PlayerContext);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={({ email, password }, _) => signIn(email, password)}>
      <Form>
        <div className="form-group">
          {error && <Notification message={error} />}
          <label htmlFor="email">Email </label>
          <div className="input-group">
            <Field type="text" className="form-control" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <div className="input-group">
            <Field
              className="form-control"
              type={canSeePassword ? "text" : "password"}
              name="password"
              required
            />
            <button
              type="button"
              className="input-group-prepend btn"
              onClick={() => setCanSeePassword(!canSeePassword)}>
              {canSeePassword ? (
                <FontAwesomeIcon icon={faEyeSlash} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faEye} size="2x" />
              )}
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <button type="submit" className="btn btn-primary w-100 m-auto">
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default Login;
